import { useState, useEffect } from "react";
import bgImage from "./assets/bg.png"; // Import the background image

const sentences = [
"அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு",
"வேண்டுதல் வேண்டாமை இலானடி சேர்ந்தார்க்கு யாண்டும் இடும்பை இல",
"துப்பார்க்குத் துப்பாய துப்பாக்கித் துப்பார்க்குத் துப்பாய தூஉம் மழை",
"கெடுப்பதூஉம் கெட்டார்க்குச் சார்வாய்மற் றாங்கே எடுப்பதூஉம் எல்லாம் மழை",
"செயற்கரிய செய்வார் பெரியர் சிறியர் செயற்கரிய செய்கலா தார்",
"அன்றறிவாம் என்னாது அறஞ்செய்க மற்றது பொன்றுங்கால் பொன்றாத் துணை",
"அன்பும் அறனும் உடைத்தாயின் இல்வாழ்க்கை பண்பும் பயனும் அது",
"வையத்துள் வாழ்வாங்கு வாழ்பவன் வான்உநற்யும் தெய்வத்துள் வைக்கப் படும்",
"தெய்வம் தொழாஅள் கொழுநன் தொழுதெழுவாள் பெய்யெனப் பெய்யும் மழை",
"ஈன்ற பொழுதின் பெரிதுவக்கும் தன்மகனைச் சான்றோன் எனக்கேட்ட தாய்",
"குழல்இனிது யாழ்இனிது என்பதம் மக்கள் மழலைச்சொல் கேளா தவர்",
"அன்பிற்கும் உண்டோ அடைக்குந்தாழ் ஆர்வலர் புன்கணீர் பூசல் தரும்",
"அன்பின் வழியது உயிர்நிலை அஃதிலார்க்கு என்புதோல் போர்த்த உடம்பு",
"மோப்பக் குழையும் அனிச்சம் முகந்திரிந்து நோக்கக் குநழ்யும் விருந்து",
"இருந்தோம்பி இல்வாழ்வ தெல்லாம் விருந்தோம்பி வேளாண்மை செய்தற் பொருட்டு",
"இன்சொலால் ஈரம் அளைஇப் படிறுஇலவாம் செம்பொருள் கண்டார்வாய்ச் சொல்",
"அல்லவை தேய அறம்பெருகும் நல்லவை நாடி இனிய சொலின",
"செய்யாமல் செய்த உதவிக்கு வையகமும் வானகமும் ஆற்றல் அரிது",
"மறவற்க மாசற்றார் கேண்மை துறவற்க துன்பத்துள் துப்பாயார் நட்பு",
"எந்நன்றி கொன்றார்க்கும் உய்வுண்டாம் உய்வில்லை செய்ந்நன்றி கொன்ற மகற்கு",
"அடக்கம் அமரருள் உய்க்கும் அடங்காமை ஆரிருள் உய்த்து விடும்",
"யாகாவா ராயினும் நாகாக்க காவாக்கால் சோகாப்பர் சொல்லிழுக்குப் பட்டு",
"தீயினாற் சுட்டபுண் உள்ளாறும் ஆறாதே நாவினாற் சுட்ட வடு",
"ஒழுக்கம் விழுப்பந் தரலான் ஒழுக்கம் உயிரினும் ஓம்பப் படும்",
"ஒழுக்கம் உடைமை குடிமை இழுக்கம் இழிந்த பிறப்பாய் விடும்",
"நன்றிக்கு வித்தாகும் நல்லொழுக்கம் தீயொழுக்கம் என்றும் இடும்பை தரும்",
"பிறன்பொருளாள் பெட்டொழுகும் பேதைமை ஞாலத்து அறம்பொருள் கண்டார்கண் இல்",
"அகழ்வாரைத் தாங்கும் நிலம்போலத் தம்மை இகழ்வார்ப் பொறுத்தல் தலை",
"நிறையுடைமை நீங்காமை வேண்டின் பொறையுடைமை போற்றி யொழுகப் படும்",
"ஒழுக்காறாக் கொள்க ஒருவன்தன் நெஞ்சத்து அழுக்காறு இலாத இயல்பு",
"இறலீனும் எண்ணாது வெஃகின் விறல்ஈனும் வேண்டாமை என்னுஞ் செருக்கு",
"கண்ணின்று கண்ணறச் சொல்லினும் சொல்லற்க முன்னின்று பின்நோக்காச் சொல்",
"சொல்லுக சொல்லிற் பயனுடைய சொல்லற்க சொல்லிற் பயனிலாச் சொல்",
"ஒத்த தறிவான் உயிர்வாழ்வான் மற்றையான் செத்தாருள் வைக்கப் படும்",
"இன்னாது இரக்கப் படுதல் இரந்தவர் இன்முகங் காணும் அளவு",
"இரத்தலின் இன்னாது மன்ற நிரப்பிய தாமே தமியர் உணல்",
"தோன்றின் புகழொடு தோன்றுக அஃதிலார் தோன்றலின் தோன்றாமை நன்று",
"வசையொழிய வாழ்வாரே வாழ்வார் இசையொழிய வாழ்வாரே வாழா தவர்",
"அருளில்லார்க்கு அவ்வுலகம் இல்லை பொருளில்லார்க்கு இவ்வுலகம் இல்லாகி யாங்கு",
"வாய்மை எனப்படுவது யாதெனின் யாதொன்றும் தீமை இலாத சொலல்",
"பொய்மையும் வாய்மை யிடத்த புரைதீர்ந்த நன்மை பயக்கும் எனின்",
"தன்நெஞ் சறிவது பொய்யற்க பொய்த்தபின் தன்நெஞ்சே தன்னைச் சுடும்",
"புறந்தூய்மை நீரான் அமையும் அகந்தூய்மை வாய்மையால் காணப் படும்",
"எல்லா விளக்கும் விளக்கல்ல சான்றோர்க்குப் பொய்யா விளக்கே விளக்கு",
"பற்றுக பற்றற்றான் பற்றினை அப்பற்றைப் பற்றுக பற்று விடற்கு",
"முறைசெய்து காப்பாற்றும் மன்னவன் மக்கட்கு இறையென்று வைக்கப் படும்",
"எண்ணென்ப ஏனை எழுத்தென்ப இவ்விரண்டும் கண்ணென்ப வாழும் உயிர்க்கு",
"தொட்டனைத் தூறும் மணற்கேணி மாந்தர்க்குக் கற்றனைத் தூறும் அறிவு",
"ஒருமைக்கண் தான்கற்ற கல்வி ஒருவற்கு எழுமையும் ஏமாப் புடைத்து",
];

export default function WordPuzzle() {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState([]);
  const [selectedWords, setSelectedWords] = useState([]);
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(600);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [correctlyPlaced, setCorrectlyPlaced] = useState(0);
  const [totalCorrectWords, setTotalCorrectWords] = useState(0);

  useEffect(() => {
    resetGame();
  }, [currentSentenceIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setTimeout(() => {
            alert(`Time up!\n✅ Correct Sentences: ${correctCount}\n❌ Wrong Attempts: ${wrongCount}\n📊 Total Correctly Placed Words: ${totalCorrectWords}`);
          }, 100);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [correctCount, wrongCount, totalCorrectWords]);

  const resetGame = () => {
    const sentence = sentences[currentSentenceIndex];
    const words = sentence.split(" ");
    setShuffledWords([...words].sort(() => Math.random() - 0.5));
    setSelectedWords([]);
    setMessage("");
    setCorrectlyPlaced(0);
  };

  const handleWordClick = (word, index) => {
    setSelectedWords((prev) => [...prev, word]);
    setShuffledWords((prev) => prev.filter((_, i) => i !== index));

    const correctWords = sentences[currentSentenceIndex].split(" ");
    if (word === correctWords[selectedWords.length]) {
      setCorrectlyPlaced((prev) => prev + 1);
      setTotalCorrectWords((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    const sentence = sentences[currentSentenceIndex];
    if (selectedWords.join(" ") === sentence) {
      setMessage("✅ Correct!");
      setCorrectCount((prev) => prev + 1);
    } else {
      setMessage("❌ Incorrect. Try again!");
      setWrongCount((prev) => prev + 1);
    }

    setTimeout(() => {
      setCurrentSentenceIndex((prev) => (prev + 1) % sentences.length);
    }, 1500);
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center text-[#063970]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Glassmorphism Container */}
      <div className="p-6 rounded-lg w-full min-h-[100vh] bg-clip-padding backdrop-filter backdrop-blur-[4px] bg-opacity-90 border-none z-10 shadow-lg text-center flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-6">தமிழ் மன்றம்</h2>
        <h2 className="text-3xl font-bold mb-4">வழங்கும்</h2>
        <h2 className="text-5xl font-bold mb-6">திருக்குறள் திறனாய்வு</h2>

        <p className="text-lg font-bold mt-2">✔️ Correctly Placed Words: {correctlyPlaced}</p>
        <div className="grid grid-cols-4 gap-2 mb-4 border border-gray-500 p-2 rounded-lg w-fit bg-gray-800 bg-opacity-50">
          {Array.from({ length: sentences[currentSentenceIndex].split(" ").length }).map((_, index) => (
            <div
              key={index}
              className="border px-4 py-2 bg-[#b2744d] rounded-md text-white flex items-center justify-center"
              style={{ minWidth: `${selectedWords[index] ? selectedWords[index].length * 12 : 50}px` }}
            >
              {selectedWords[index] || ""}
            </div>
          ))}
        </div>

        <div className="flex gap-2 flex-wrap border border-white p-4 rounded-lg bg-gray-700 bg-opacity-50">
          {shuffledWords.map((word, index) => (
            <button
              key={index}
              className="border px-4 py-2 bg-[#b2744d] text-white rounded-md hover:bg-[#b2741d] transition-all"
              style={{ minWidth: `${word.length * 12}px` }}
              onClick={() => handleWordClick(word, index)}
            >
              {word}
            </button>
          ))}
        </div>

        <button className="mt-4 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all" onClick={handleSubmit}>
          Submit
        </button>

        {message && <p className="mt-4 font-bold text-lg">{message}</p>}
        <p className="mt-4 text-lg">⏳ Time Left: {timeLeft}s</p>
      </div>
    </div>
  );
}
