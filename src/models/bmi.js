/**
 * Tính chỉ số BMI dựa trên cân nặng và chiều cao.
 * 
 * @param {number} weight - Cân nặng của người dùng (kg).
 * @param {number} height - Chiều cao của người dùng (cm).
 * @returns {number} - Chỉ số BMI với 2 chữ số thập phân.
 */
function calculateBMI(weight, height) {
    const heightInMeters = height / 100; // Chuyển chiều cao từ cm sang mét
    const bmi = weight / (heightInMeters * heightInMeters); // Công thức tính BMI
    return bmi.toFixed(2); // Trả về BMI với 2 chữ số thập phân
}

/**
 * Phân loại chỉ số BMI.
 * 
 * @param {number} bmi - Chỉ số BMI.
 * @returns {string} - Phân loại BMI.
 */
function classifyBMI(bmi) {
    if (bmi < 18.5) {
        return "Gầy";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Bình thường";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Thừa cân";
    } else {
        return "Béo phì";
    }
}

// Xuất các hàm
module.exports = { calculateBMI, classifyBMI };
