FROM node:20-bullseye

# Install latest chrome dev package and fonts to support major charsets (Chinese, Japanese, Arabic, Hebrew, Thai and a few others)
# Note: google-chrome-stable is not strictly needed if we let puppeteer download its own chrome, 
# BUT we need the libraries. installing google-chrome-stable is the easiest way to get all libs.
RUN apt-get update \
    && apt-get install -y wget gnupg \
    && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | gpg --dearmor -o /usr/share/keyrings/googlechrome-linux-keyring.gpg \
    && sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/googlechrome-linux-keyring.gpg] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
    && apt-get update \
    && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
      --no-install-recommends \
    && rm -rf /var/lib/apt/lists/*

# Set working directory
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies (let puppeteer download chrome into .cache)
# DO NOT SKIP DOWNLOAD HERE
RUN npm install

# Copy source code
COPY . .

# Create temp directories with permissions
RUN mkdir -p temp_processing uploads \
    && chown -R node:node temp_processing uploads

# Switch to non-root user
USER node

# Expose port
ENV PORT=3000
EXPOSE 3000

# Start command
CMD ["node", "src/server.js"]

