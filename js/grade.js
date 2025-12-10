// Javascript Start

function calculateGrade() {
    // Collect marks using prompt()
    let sub1 = Number(prompt("Enter marks for English      :"));
    let sub2 = Number(prompt("Enter marks for Mathematics  :"));
    let sub3 = Number(prompt("Enter marks for Chemistry    :"));
    let sub4 = Number(prompt("Enter marks for Physics      :"));
    let sub5 = Number(prompt("Enter marks for Bilogy       :"));

    // Total Calculation
    let total = sub1 + sub2 + sub3 + sub4 + sub5;

    // Average Calculation
    let average = total / 5;

    // Grade Calculation
    let grade = "";

    if (average >= 90) {
        grade = "A+";
    } else if (average >= 80) {
        grade = "A";
    } else if (average >= 70) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else if (average >= 50) {
        grade = "D";
    } else {
        grade = "F";
    }

    // Display Results
    alert(
        "Total Marks: " + total +
        "\nAverage Marks: " + average.toFixed(2) +
        "\nGrade: " + grade
    );
}

// Javascript End