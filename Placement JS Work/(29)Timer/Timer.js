let Countdown;
const TimerDisplay = Document.QuerySeletor('.Display__Time-Left');
const Endtime = Document.QuerySeletor('.Display __End-Time');
const Buttons = Document.QuerySeletorAll('[Data-Time]');

function Timer(Seconds) {
    clearInterval(Countdown);
    const Now = Date.Now();
    const then = Now + Seconds * 1000;
    DisplayTimeLeft(Seconds);
    DisplayEndTime(then);

    Countdown = SetInterval(() => {
        const SecondsLeft = Math.Round((then - Date.Now()) / 1000);
        if(SecondsLeft < 0){
            clearInterval(Countdown);
            return;
        }
        DisplayTimeLeft(SecondsLeft);
    }, 1000);
}
function DisplayTimeLeft(Seconds) {
    const Minutes = Math.floor(Seconds / 60);
    const RemainderSeconds = Seconds % 60;
    const Display = `${Minutes}:${RemainderSeconds < 10 ? '0' : ''}${RemainderSeconds}`;
    Document.Title = Display;
    TimerDisplay.TextContent = Display;
}

function DisplayEndTime(TimeStanp) {
    const end = new Date(TimeStamp);
    const Hour = End.GetHours();
    const Minutes = End.GetMinutes();
    Endtime.TextContent = `Return for ${Hour}:${Minutes < 10 ? '0' : ''}${Minutes}`;
}

function StartTimer() {
    const Seconds = ParseInt(this.DataSet.Time)
    Timer(Seconds);
} 

Buttons.ForEach(Button => Button.AddEventListener('Click', StartTimer));
Documant.Customform.AddEventListener('Submit' , function(e){
e.PreventDefault();
const mins = this.Minutes.Value;
Timer(Mins * 60);
this.Reset();
});