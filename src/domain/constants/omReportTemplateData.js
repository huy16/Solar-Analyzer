/**
 * Default structure and content for the 13 sections of the O&M Report.
 * Labels and placeholders are based on the standard DOCX template.
 */
const OM_REPORT_DEFAULT_DATA = {
    // Section 1: Information
    projectInfo: {
        customer: "Công ty Cổ phần Đầu tư Thế Giới Di Động",
        projectName: "CAS-BHX_KHH_5354",
        location: "94 Lý Tự Trọng, Diên Khánh, Khánh Hòa, Việt Nam",
        inspectionCompany: "Công ty TNHH Giải pháp Điều khiển & Tự động hóa",
        inspectionDate: "11/01/2026",
        capacity: "29,42 kWp",
        codDate: "16/08/2024",
        inspectionNo: "Kiểm tra định kỳ lần 2",
        technicians: "CPS - Trần Đình Khoa – CPS - Lê Hoàng Đạt"
    },

    // Section 2: Equipment Used
    equipmentUsed: [
        { name: "Testo 871 – IR Camera nhiệt hồng ngoại", photo: "Report Template OM/Trang 1/Testo_871-removebg-preview.png", function: "Chụp ảnh nhiệt / Thermal imaging" },
        { name: "Hioki IR4053-10 Megohmmeter", photo: "Report Template OM/Trang 1/Hioki IR 4053.png", function: "Đo điện trở cách điện / Insulation resistance" },
        { name: "Kyoritsu 4105A – Earth tester", photo: "Report Template OM/Trang 1/Kyoristu_4105A-removebg-preview.png", function: "Đo điện trở nối đất / Earth resistance" },
        { name: "Đồng hồ VOM", photo: "Report Template OM/Trang 2/Đồng hồ VOM.jpg", function: "Đo điện áp, dòng điện / Voltage & current" },
        { name: "Cần siết lực 3/8\" Kingtony (5-25 N.m)", photo: "Report Template OM/Trang 2/Cần siết lưc.jpg", function: "Kiểm tra lực siết ốc / Torque check" }
    ],

    // Section 3: PV Panel System
    pvSystem: {
        specs: {
            manufacturer: "TCL",
            panelQty: "38",
            panelModel: "CS7N-665MS",
            capacity: "665",
            installDate: "08/2024",
            warranty: ""
        },
        checklist: [
            { item: "Chụp ảnh tổng quan mảng pin\n<span class=\"italic\">Overall PV array photo</span>", status: "OK", remarks: "" },
            { item: "Kiểm tra tấm pin vỡ, trầy xước, bong tróc\n<span class=\"italic\">Check cracked, scratched, delaminated panels</span>", status: "OK", remarks: "" },
            { item: "Kiểm tra khung nhôm tấm pin (cong vênh, han gỉ)\n<span class=\"italic\">Check panel frame (deformation, corrosion)</span>", status: "OK", remarks: "" },
            { item: "Kiểm tra dây nối/đầu nối MC4 tấm pin\n<span class=\"italic\">Check MC4 connector condition</span>", status: "OK", remarks: "" }
        ],
        thermalCheck: [
            { item: "Quét nhiệt tổng quan toàn bộ mảng pin (≤ 65°C)\n<span class=\"italic\">Full array thermal scan (≤ 65°C)</span>\nThiết bị: Testo 871", status: "OK", remarks: "" },
            { item: "Ghi nhận vị trí tấm pin có hotspot\n(ΔT > 5°C → cảnh báo; ΔT > 10°C → sự cố)\n<span class=\"italic\">Record hotspot panels\n(ΔT > 5°C → warning; > 10°C → fault)</span>", status: "OK", remarks: "" }
        ],
        insulationResistance: [
            { string: "String 1", panelQty: "14", voc: "", irPlus: "71.4", irMinus: "60.7", evaluation: "OK" },
            { string: "String 2", panelQty: "14", voc: "", irPlus: "60.4", irMinus: "53.0", evaluation: "OK" },
            { string: "String 3", panelQty: "14", voc: "", irPlus: "64.5", irMinus: "90.5", evaluation: "OK" },
            { string: "String 4", panelQty: "", voc: "", irPlus: "", irMinus: "", evaluation: "OK" }
        ]
    },

    // Section 4: PV Mounting Structure
    mountingStructure: {
        specs: {
            type: "Liên kết Rail – Chân L – Sóng tôn",
            material: "Nhôm",
            installYear: "2024",
            overallCondition: "Đạt"
        },
        checklist: [
            { item: "Chụp ảnh tổng quan & chi tiết khung giá đỡ\n<span class=\"italic\">Overall and detailed photo of mounting structure</span>", status: "OK" },
            { item: "Siết lực ốc kẹp biên (end clamp) – theo torque nhà SX\n<span class=\"italic\">End clamp torque check – per manufacturer spec</span>", status: "OK" },
            { item: "Siết lực ốc kẹp giữa (mid clamp) – theo torque nhà SX\n<span class=\"italic\">Mid clamp torque check – per manufacturer spec</span>", status: "OK" },
            { item: "Kiểm tra ống ruột gà đi dây cáp DC trên mái\n<span class=\"italic\">DC cable conduit on roof</span>", status: "OK" },
            { item: "Kiểm tra kẹp dây DC & cố định đầu nối MC4\n<span class=\"italic\">DC cable clamps & MC4 connector fixation</span>", status: "OK" }
        ]
    },

    // Section 5: Solar AC Cabinet
    acCabinet: {
        specs: {
            manufacturer: "CAS/ Việt Nam",
            model: "CAS-SB-2ST",
            cbQty: "5",
            ipRating: "IP65"
        },
        energizedCheck: [
            { item: "Chụp ảnh tổng quan & chi tiết thiết bị trong tủ\n<span class=\"italic\">Overall & detail photo of cabinet interior</span>", status: "OK" },
            { item: "Kiểm tra trạng thái / cờ hoạt động từng thiết bị điện\n<span class=\"italic\">Check status indicator</span>", status: "OK" },
            { item: "Chụp ảnh chi tiết nếu phát hiện hoạt động bất thường\n<span class=\"italic\">Detail photo if abnormal operation found</span>", status: "OK" },
            { item: "Quét nhiệt tủ AC Solar (≤ 65°C)\n<span class=\"italic\">Thermal scan of AC cabinet (≤ 65°C)</span>", status: "OK" }
        ],
        deEnergizedCheck: [
            { item: "Kiểm tra, siết lực các đầu nối điện (MCCB, MCB, Terminal)\n<span class=\"italic\">Check & torque electrical terminals</span>", status: "OK" },
            { item: "Đo điện trở cách điện\n<span class=\"italic\">Insulation resistance test (≥ 1 MΩ)</span>", status: "OK" },
            { item: "Đo điện trở nối đất\n<span class=\"italic\">Earth resistance test (≤ 4 Ω)</span>", status: "OK" },
            { item: "Kiểm tra độ kín bụi; xịt foam các lỗ hở\n<span class=\"italic\">Check dust sealing; foam-seal</span>", status: "OK" },
            { item: "Vệ sinh bên trong tủ và lưới chắn bụi\n<span class=\"italic\">Clean interior and dust filter</span>", status: "OK" }
        ]
    },

    // Section 6: Inverter
    inverter: {
        specs: {
            manufacturer: "Huawei",
            model: "SUN2000-30KTL-M3",
            power: "30kW",
            qty: "1",
            firmware: "",
            installDate: "16/08/2024"
        },
        checklist: [
            { item: "Kiểm tra & siết lực đầu đấu nối AC của Inverter\n<span class=\"italic\">Check & torque AC terminal connections</span>", status: "OK" },
            { item: "Kiểm tra đầu kết nối MC4 phía DC\n<span class=\"italic\">Check DC side MC4 connector condition</span>", status: "OK" },
            { item: "Vệ sinh nhãn string dây DC – kiểm tra ghi chú đúng chuẩn\n<span class=\"italic\">Clean DC string labels – verify labelling standard</span>", status: "OK" },
            { item: "Vệ sinh quạt tản nhiệt (nếu có)\n<span class=\"italic\">Clean cooling fan (if present)</span>", status: "OK" },
            { item: "Vệ sinh / quét bụi toàn bộ thân Inverter\n<span class=\"italic\">Clean / dust inverter body</span>", status: "OK" },
            { item: "Kiểm tra log lỗi / cảnh báo trên màn hình Inverter\n<span class=\"italic\">Check inverter display for error logs / warnings</span>", status: "OK" },
            { item: "Kiểm tra portal / app giám sát online\n<span class=\"italic\">Check online monitoring portal / app</span>", status: "OK" },
            { item: "Cập nhật firmware (nếu có phiên bản mới)\n<span class=\"italic\">Update firmware (if new version available)</span>", status: "OK" }
        ]
    },

    // Section 7-9
    others: {
        mountingFrame: {
            specs: {
                type: "Liên kết Rail - Ke vuông - Tường",
                material: "Nhôm"
            },
            checklist: [
                { item: "Kiểm tra ngoại quan: khung giá đỡ chắc chắn, không cong vênh\n<span class=\"italic\">Check: frame solid, no deformation</span>", status: "Đạt", remarks: "" },
                { item: "Kiểm tra & siết lực bu-lông liên kết khung – tường\n<span class=\"italic\">Check & torque frame-to-wall bolts</span>", status: "Đạt", remarks: "" },
                { item: "Chụp ảnh & kiểm tra độ chắc chắn mái che Inverter (nếu có)\n<span class=\"italic\">Photo & check inverter weather cover (if present)</span>", status: "Đạt", remarks: "" }
            ]
        },
        cableTray: [
            { item: "Kiểm tra độ kín máng cáp AC & DC\n<span class=\"italic\">Check sealing of AC & DC cable tray</span>", status: "Đạt", remarks: "" },
            { item: "Xịt foam làm kín các điểm hở chưa đạt tiêu chuẩn\n<span class=\"italic\">Foam-seal any non-compliant gaps</span>", status: "Đạt", remarks: "" },
            { item: "Kiểm tra đầu nối ống ruột gà với máng cáp (không hở, không lỏng)\n<span class=\"italic\">Check conduit-to-tray joints (no gap, no looseness)</span>", status: "Đạt", remarks: "" },
            { item: "Kiểm tra kẹp dây DC & cố định đầu nối MC4\n<span class=\"italic\">DC cable clamps & MC4 connector fixation</span>", status: "Đạt", remarks: "" }
        ],
        roofStructure: [
            { item: "Chụp ảnh tổng quan xà gồ, vì kèo dưới mái tôn khu vực lắp pin\n<span class=\"italic\">Photo of purlins & rafters under metal roof at panel area</span>", status: "Đạt", remarks: "" },
            { item: "Kiểm tra mối hàn liên kết cột – vì kèo\n<span class=\"italic\">Check weld joints between columns and rafters</span>", status: "Đạt", remarks: "" },
            { item: "Kiểm tra ngoại quan độ võng vì kèo\n<span class=\"italic\">Visual check of rafter deflection</span>", status: "Đạt", remarks: "" },
            { item: "Kiểm tra các thanh giằng gia cố (nếu có)\n<span class=\"italic\">Check reinforcement bracing (if present)</span>", status: "Đạt", remarks: "" }
        ]
    },

    // Section 11: Earth Resistance Results
    earthResistance: [
        { point: "Cọc tiếp địa chính\n<span class=\"italic\">Main earthing rod</span>", standard: "≤ 4 Ω", value: "2.5", evaluation: "OK" },
        { point: "Vỏ Inverter\n<span class=\"italic\">Inverter enclosure</span>", standard: "≤ 4 Ω", value: "1.2", evaluation: "OK" },
        { point: "Vỏ Tủ AC\n<span class=\"italic\">AC cabinet enclosure</span>", standard: "≤ 4 Ω", value: "1.5", evaluation: "OK" }
    ],

    // Section 12: Summary
    summary: [
        { module: "Hệ thống pin năng lượng mặt trời\n<span class=\"italic\">PV System</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Tủ điện AC Solar\n<span class=\"italic\">Solar AC Cabinet</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Biến tần\n<span class=\"italic\">Inverter</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Khung giá đỡ Tủ AC / Inverter\n<span class=\"italic\">AC Cabinet & Inverter Mounting Frame</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Máng cáp & Ống ruột gà (AC / DC)\n<span class=\"italic\">Cable Tray & Conduit (AC / DC)</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Kết cấu mái\n<span class=\"italic\">Roof Structure</span>", severity: "Thấp", description: "Không", action: "" },
        { module: "Hệ thống tiếp địa\n<span class=\"italic\">Grounding System</span>", severity: "Thấp", description: "Không", action: "" }
    ],

    overallComments: "Hệ thống hoạt động bình thường – Tiếp tục vận hành."
};

module.exports = { OM_REPORT_DEFAULT_DATA };
