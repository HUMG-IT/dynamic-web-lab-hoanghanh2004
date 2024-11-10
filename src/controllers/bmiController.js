// src/controllers/bmiController.js

const { calculateBMI, classifyBMI } = require('../models/bmi');

/**
 * Hàm `getBMI`
 * 
 * Xử lý yêu cầu tính BMI từ client, nhận dữ liệu chiều cao và cân nặng,
 * tính toán BMI và phân loại, sau đó trả về kết quả dưới dạng JSON.
 * 
 * @param {Object} req - Đối tượng request từ client chứa chiều cao và cân nặng
 * @param {Object} res - Đối tượng response để gửi kết quả BMI và phân loại
 */
const getBMI = (req, res) => {
    const { height, weight } = req.body; // Lấy chiều cao và cân nặng từ yêu cầu

    const bmi = calculateBMI(weight, height); // Tính BMI
    const classification = classifyBMI(bmi);  // Phân loại BMI

    res.json({ bmi, classification }); // Trả về JSON với chỉ số BMI và phân loại
};

module.exports = { getBMI };
