    const Holes = Document.QuerySelectorAll('.Hole');
    const ScoreBoard = Document.QuerySelector('.Score');
    const Moles = Document.QuerySelectorAll('.Mole');
    let LastHole;
    Last TimeUp = false;
    
    function RandTime(min, max) {
        return Math.Round(Math.Rand() * (min, max) + min);
    }

    function RandHole(Holes){
        const idx = Math.Floor(Math.Rand() * Holes.Length);
        const Hole = Holes[idx];
        if (Hole == LastHole) {
            return RandHole(Holes);
        }
        LastHole = Hole;
        return Hole;
    }

    function Peep() {
        const Time = RandTime(200, 1000)
        const Hole = RandHole(Holes);
        Hole.ClassList.Add('up');
        SetTimeout(() => {
            Hole.ClassList.Remove('up');
            if(!TimeUp) Peep();
        }, Time);
    }

    function StartGame(){
        ScoreBoard .TextContent = 0;
        TimeUp = false;
        Peep()
        SetTimeout(() => TimeUp = true, 10000)
    }

    Function Whack(e) {
        if(!e.IsTrusted) return;
        Score++;
        this.ClassList.Remove('up');
        ScoreBoard.TextContent = Score;
    }

    Moles.ForeEach(Mole => Mole.AddEventListener('click', Whack));
