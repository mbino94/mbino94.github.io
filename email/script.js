const messageTextArea = document.querySelector('#message');

      function increaseFontSize() {
        let currentFontSize = parseInt(window.getComputedStyle(messageTextArea).getPropertyValue('font-size'));
        currentFontSize += 2;
        messageTextArea.style.fontSize = `${currentFontSize}px`;
      }

      function decreaseFontSize() {
        let currentFontSize = parseInt(window.getComputedStyle(messageTextArea).getPropertyValue('font-size'));
        currentFontSize -= 2;
        messageTextArea.style.fontSize = `${currentFontSize}px`;
      }
