$("#submit").click(function () {
        let word = $("#userWord").val()
            $("#msg1").text(`You entered: ${word}`);

            if (word.length < 2) {
        alert("Please use at least 2 letters")
    } else {
        let cleanWord = word.toLowerCase().replace(/\s|\'|\"/g, '');
                $("#msg2").text(`Cleaned up a bit, that's: ${cleanWord}.`);

                let revWord = word.split('').reverse().join('');
                $("#msg3").text(`Reversed, it's: ${revWord}.`);

                let cleanRevWord = revWord.toLowerCase().replace(/\s|\'|\"/g, '');
                $("#msg4").text(`Now when we clean it up, it's ${cleanRevWord}.`);

                let result = "";

                if (cleanWord == cleanRevWord) {
        result = `So, ${word} IS a palindrome!`;
                } else {
        result = `So, ${word} is NOT a palindrome.`;
                };

                $("#finalMsg").text(" " + result);
            }
        });
$("#clear").click(function () {
$("#userWord").val("");
$("#msg1").text("");
$("#msg2").text("");
$("#msg3").text("");
$("#msg4").text("");
$("#finalMsg").text("");
});