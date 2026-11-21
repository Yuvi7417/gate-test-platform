registerTest({
    "name": "DPP 05 - Computer Organization (Floating Point Representation)",
    "testLabel": "DPP 05",
    "testType": "DPP",
    "bracket": "Floating Point Representation",
    "subject": "coa",
    "series": "cse-dpp-2027",
    "date": "Nov 03, 2026",
    "duration": "15 Min",
    "totalMarks": 4,
    "topicsCovered": "Floating Point Representation Practice Questions",
    "questions": [
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\">A number is represented in IEEE 754 single-precision floating-point format as the hexadecimal value \\( \\text{C22F0000} \\). What is the decimal value of this number?</span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\( -43.75 \\)</span>",
                "<span style=\"display: inline;\">\\( -39.875 \\)</span>",
                "<span style=\"display: inline;\">\\( -47.75 \\)</span>",
                "<span style=\"display: inline;\">\\( -12.25 \\)</span>"
            ],
            "answer": "A",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> Hexadecimal: \\( \\text{C22F0000} \\)<br> Convert to binary (32-bit):<br> \\( \\text{C22F0000} = (1\\ 10000100\\ 01011110000000000000000)_2 \\)<br><br> 1. <b>Sign bit (S):</b> \\( 1 \\) (Negative number)<br> 2. <b>Biased Exponent (E):</b> \\( 10000100_2 = 132_{10} \\)<br> &nbsp;&nbsp;&nbsp;&nbsp;True Exponent \\( = E - \\text{Bias} = 132 - 127 = 5 \\)<br> 3. <b>Mantissa (M):</b> \\( 01011110000000000000000_2 \\)<br> &nbsp;&nbsp;&nbsp;&nbsp;Implicitly normalized significand \\( = 1.0101111_2 \\)<br><br> \\( \\text{Value} = -1 \\times (1.0101111)_2 \\times 2^5 = -(101011.11)_2 \\)<br> \\( -(32 + 8 + 2 + 1 + 0.5 + 0.25) = \\mathbf{-43.75} \\)<br><br><a href=\"https://gateoverflow.in/487059/go-classes-dpp-coa-floating-point#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/floating-point-representation\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Floating Point</a></b></div></div>"
        },
        {
            "marks": 2,
            "neg": 0,
            "type": "NAT",
            "text": "<span style=\"display: inline;\">The range of representable normalized numbers in IEEE-754 floating-point binary fractional representation but with \\( \\text{bias}=128 \\) using a \\( 32 \\)-bit word is \\( 2^a \\text{ to } (2-2^b) \\times 2^c \\).<br/><br/> The value of \\( a+b+c \\) is ______________. (Answer in integer)</span>",
            "image": "",
            "options": [],
            "answer": "-24",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> Given: \\( \\text{Bias} = 128 \\).<br> Word size = 32 bits (1 sign bit, 8 exponent bits, 23 fraction bits).<br><br> • For normalized numbers, exponent field \\( e \\in [1, 254] \\).<br> • True exponent \\( E = e - \\text{Bias} = [1 - 128, 254 - 128] = [-127, 126] \\).<br> • Significand lies in range \\( [1, 1 + (1 - 2^{-23})] = [1, 2 - 2^{-23}] \\).<br><br> <b>Smallest positive normalized number:</b><br> \\( 1 \\times 2^{-127} = 2^{-127} \\implies a = -127 \\)<br><br> <b>Largest positive normalized number:</b><br> \\( (2 - 2^{-23}) \\times 2^{126} \\implies b = -23, c = 126 \\)<br><br> \\( a + b + c = -127 + (-23) + 126 = \\mathbf{-24} \\)<br><br><a href=\"https://gateoverflow.in/484337/go-classes-dpp-coa-floating-point-representation#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/floating-point-representation\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Floating Point</a></b></div></div>"
        },
        {
            "marks": 1,
            "neg": 0.33,
            "type": "MCQ",
            "text": "<span style=\"display: inline;\">The decimal floating-point number \\( -40.1 \\), when represented using the IEEE-754 single-precision \\( (32\\text{-bit}) \\) format and expressed in hexadecimal notation, equals:</span>",
            "image": "",
            "options": [
                "<span style=\"display: inline;\">\\( 0x\\text{C2206000} \\)</span>",
                "<span style=\"display: inline;\">\\( 0x\\text{C2006666} \\)</span>",
                "<span style=\"display: inline;\">\\( 0x\\text{C2006000} \\)</span>",
                "<span style=\"display: inline;\">\\( 0x\\text{C2206666} \\)</span>"
            ],
            "answer": "D",
            "solution": "<div style=\"background-color: #bae1c4; border: 1px solid #75c98a; border-radius: 10px; padding: 10px 15px; margin-top: 15px; color: #155724; font-family: sans-serif;\">  <strong style=\"font-size: 16px; color: #000;\">Explanation:</strong><br> Convert \\( -40.1 \\) to IEEE-754 single-precision (32-bit):<br><br> 1. <b>Sign bit (S):</b> Since number is negative, \\( S = 1 \\).<br> 2. <b>Integer part:</b> \\( 40_{10} = 101000_2 \\)<br> 3. <b>Fraction part:</b> \\( 0.1_{10} = 0.0001100110011..._2 \\)<br> 4. \\( 40.1_{10} = 101000.0001100110011..._2 = 1.01000000110011001100110_2 \\times 2^5 \\)<br> 5. <b>Biased Exponent:</b> \\( E = 5 + 127 = 132_{10} = 10000100_2 \\)<br> 6. <b>Mantissa (23 bits):</b> \\( 01000000110011001100110_2 \\)<br><br> <b>Binary representation:</b><br> \\( 1\\ 10000100\\ 01000000110011001100110 \\)<br> Group into 4-bit nibbles for Hexadecimal:<br> \\( 1100\\ 0010\\ 0010\\ 0000\\ 0110\\ 0110\\ 0110\\ 0110 \\)<br> \\( = \\mathbf{0x\\text{C2206666}} \\) (Option D)<br><br><a href=\"https://gateoverflow.in/484336/go-classes-dpp-coa-ugc-net#a_list\" target=\"_blank\" style=\"text-decoration: none; color: #2e7bc5; font-size: 15px;\">Click here for detail solution by gateoverflow</a><div class=\"year_sub_chap_link\" style=\"margin-top:5px; font-size:14px;\"><b><a href=\"https://gateoverflow.in/tag/goclasses-coa-practice-questions\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">GO Classes DPP</a></b> <b><a href=\"https://gateoverflow.in/tag/floating-point-representation\" style=\"color:#2f6d1a; text-decoration:none\" target=\"_blank\">COA - Floating Point</a></b></div></div>"
        }
    ]
});
