


document.getElementById("buttonResult").addEventListener('click',
   function getSummRows() {
      let minNumber = Number(document.getElementById("minNumberInput").value)
      let maxNumber = Number(document.getElementById("maxNumberInput").value)
      let arrNumbers = []

      if (minNumber > maxNumber) {
         alert("Атата,так нельзя! Ты же помнишь, что первое значение должно быть меньше второго?)")
         location.reload()
      }

      let summMinMaxNumbers = minNumber + maxNumber
      arrNumbers.push(minNumber)
      for (let i; minNumber < maxNumber; i++) {
         arrNumbers.push(minNumber = minNumber + 1)
      }
      let resultSummRows = (summMinMaxNumbers / 2 * arrNumbers.length)

      if (!Number(summMinMaxNumbers)) {
         alert("Миша,Миша... Ну кто же вводит вместо цифр всякую чепуху?)))");
         location.reload()
      }
      if (Number.MAX_SAFE_INTEGER < resultSummRows && Number.MIN_SAFE_INTEGER < resultSummRows) {
         alert("Михаил Владимирович,я конечно все понимаю, но JS не резиновый!");
         location.reload()
      }

      return document.getElementById("resultString").innerHTML = "Сумма ряда равна:" + resultSummRows
   })

