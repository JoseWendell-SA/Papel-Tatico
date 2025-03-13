let ostUrl = "FE5Ost/";
let ostName = [
    "Thracia 776 - The Beginning",
    "Thracia 776 - Theme of Fire Emblem",
    "Thracia 776 - Map A",
    "Thracia 776 - Map B - A",
    "Thracia 776 - Map B - B",
    "Thracia 776 - Map C",
    "Thracia 776 - Sortie",
    "The Army of Leif Seeks Victory - Base",
    "The Army of Leif Seeks Victory - Charge A",
    "The Army of Leif Seeks Victory - Charge B",
    "The Army of Leif Seeks Victory - Adversity",
    "The Army of Leif Seeks Victory - Close to Victory",
    "The Army of Leif Seeks Victory - Close to Defeat",
    "The Army of Leif Seeks Victory - Search for the Enemy",
    "The Army of Leif Seeks Victory - Leif",
    "The Threat Draws Near - Base A",
    "The Threat Draws Near - Base B",
    "The Threat Draws Near - Charge",
    "The Threat Draws Near - Priest of Darkness",
    "The Threat Draws Near - Search for the Enemy",
    "The Threat Draws Near - The Final Chapter",
    "Spread Justice - Offense",
    "Spread Justice - Defense",
    "Spread Justice - Recovery Magic A",
    "Spread Justice - Recovery Magic B",
    "Spread Justice - Dancer",
    "Spread Justice - Class Change",
    "Spread Justice - Boss Fight",
    "Spread Justice - Fight with Laydrick",
    "Spread Justice - Fight with Beld",
    "Spread Justice - Battle in the Place of Hand-to-Hand Fighting",
    "Spread Justice - Level Up A",
    "Spread Justice - Level Up B",
    "In the Midst of Battle - Crisis",
    "In the Midst of Battle - Charge",
    "In the Midst of Battle - Destiny",
    "In the Midst of Battle - Army A",
    "In the Midst of Battle - Savage Tribe",
    "In the Midst of Battle - Laydrick",
    "In the Midst of Battle - Lopto A",
    "In the Midst of Battle - Thracia",
    "In the Midst of Battle - Lopto B",
    "In the Midst of Battle - Army B",
    "Chapter's End - Victory",
    "Chapter's End - Victory Minor",
    "Chapter's End - August Speaks A",
    "Chapter's End - August Speaks B",
    "Chapter's End - Leif Defeated",
    "Chapter's End - Conquest",
    "In-Chapter - Arena - Acceptance",
    "In-Chapter - A Comrade Enters",
    "In-Chapter - Meeting, Meeting Again",
    "In-Chapter - Comical",
    "In-Chapter - Church",
    "In-Chapter - Sadness",
    "In-Chapter - Sara",
    "In-Chapter - Ayvel",
    "Game Over",
    "Ending - War Record",
    "Ending - Afterwards",
    "Ending - Ballad",
    "Ending - Music Box"
];

let audioCurrentTime = 0;

let isPlaying = 0;

let pos = 0;
let max = 62;

let title = document.getElementById("SongTitle");

let audio = document.getElementById("CurrentSong");
let audioPlayerIcon = document.getElementById("AudioPlayerIcon");

document.getElementById("AudioPlayerIcon").addEventListener("click", function(e)
{
    e.preventDefault();

    if (isPlaying == 0)
    {
        audioPlayerIcon.src = "Pause.webp";
        isPlaying = 1;
        PlaySong();
    }

    else
    {
        audioPlayerIcon.src = "Play.webp";
        isPlaying = 0;
        audio.pause();
        audioCurrentTime = audio.currentTime;
    }
});

document.getElementById("Previous").addEventListener("click", function(e)
{
    e.preventDefault();

    ChangeSong(-1);
});

document.getElementById("Next").addEventListener("click", function(e)
{
    e.preventDefault();

    ChangeSong(1);
});

function ChangeSong(num)
{
    pos += num;

    if (pos >= max)
        pos = 0;

    if (pos <= -1)
        pos = max-1;
    
    audioPlayerIcon.src = "Pause.webp";
    isPlaying = 1;
    audioCurrentTime = 0;

    title.textContent = ostName[pos];

    PlaySong();
}

function PlaySong()
{
    audio.src = ostUrl+ostName[pos]+".mp3";
    audio.play();
    audio.currentTime = audioCurrentTime;
}