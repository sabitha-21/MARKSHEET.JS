function calculateTotal(element) {
    let row = element.closest('tr');
    let marks = row.querySelectorAll('.marks');
    let total = 0;

    marks.forEach(mark => {
        let value = parseInt(mark.value) || 0;
        total += value;
    });

    row.querySelector('.total-marks').textContent = total;

    calculateGrandTotal();
}

function calculateGrandTotal() {
    let totalMarksElements = document.querySelectorAll('.total-marks');
    let grandTotal = 0;

    totalMarksElements.forEach(total => {
        grandTotal += parseInt(total.textContent);
    });

    document.getElementById('grandTotal').textContent = grandTotal;
    document.getElementById('percentage').textContent = ((grandTotal / 800) * 100).toFixed(2) + '%';
    document.getElementById('inWords').textContent = numberToWords(grandTotal) + ' Hundred Zero Zero';
    document.getElementById('grade').textContent = calculateGrade(grandTotal / 8);
}

function numberToWords(num) {
    const a = ['Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'];
    const b = ['Zero', 'Ten', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num < 20) return a[num];
    let digit = num % 10;
    if (num < 100) return b[Math.floor(num / 10)] + (digit ? ' ' + a[digit] : '');
    if (num < 1000) return a[Math.floor(num / 100)] + ' Hundred' + (num % 100 == 0 ? '' : ' ' + numberToWords(num % 100));
}

function calculateGrade(average) {
    if (average >= 90) return 'A';
    if (average >= 80) return 'B';
    if (average >= 70) return 'C';
    if (average >= 60) return 'D';
    return 'F';
}
