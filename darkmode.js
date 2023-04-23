function toggleDark(){
    const checkbox = document.getElementsByClassName('checkbox')[0];

    const darkContent = document.getElementsByClassName('content')[0];
    const darkText = document.getElementsByClassName('text ');
    const darkTextBox = document.getElementsByClassName('add-to-do')[0];
    const darkTextBoxInput = document.getElementById('input');

    const darkDate = document.getElementById('date');
    const darkTime = document.getElementById('js-clock');
    

    const darkInfo = document.getElementsByClassName('info')[0];
    const darkClear = document.getElementsByClassName('fa fa-refresh')[0];

    const darkPopup = document.getElementsByClassName('popup-text')[0];

    if(checkbox.checked == false){
        const root = document.querySelector(':root');
        const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
        const myVariables = {
          '--pomodoro': '#3d6300',
          '--shortBreak': '#5353bd',
          '--longBreak': '#942222',
        };
        setVariables(myVariables);

        //content
        darkContent.style = 'background: black; color: white;';
        for(var i = 0; i<darkText.length; i++){
            darkText[i].style = 'background: black; color: white;';
        }

        //To-Do text box
        darkTextBox.style = 'background: black; color: white; border-top: 1px solid white;';

        darkTextBoxInput.style = 'color: white;';

        //Date
        darkDate.style = 'color: black;';

        //Time
        darkTime.style = 'color: white;';

        //Font awesome icons
        darkInfo.style = 'filter: invert(0%);';
        darkClear.style = 'color: black;';

        //Popup
        darkPopup.style = 'background: black; color: white;';
    } else {//Do the opposite as above
        const root = document.querySelector(':root');
        const setVariables = vars => Object.entries(vars).forEach(v => root.style.setProperty(v[0], v[1]));
        const myVariables = {
            '--pomodoro': '#8fbc8f',
            '--shortBreak': '#8f8fbd',
            '--longBreak': '#bd8f8f',
        };
        setVariables(myVariables);
        //content
        darkContent.style = 'background: white; color: black;';
        for(var i = 0; i<darkText.length; i++){
            darkText[i].style = 'background: white; color: black;';
        }
        
        //To-Do text box
        darkTextBox.style = 'background: white; color: black; border-top: 1px solid black;';
        
        //Date
        darkDate.style = 'color: white;';
        
        //Time
        darkTime.style = 'color: black;';
        
        //Font awesome icons
        darkInfo.style = 'filter: invert(100%);';
        darkClear.style = 'color: white;';

        //Popup
        darkPopup.style = 'background: white; color: black;';
    }
}