import { NextResponse } from 'next/server';

const translationsData = [
  {
    id: 1,
    source: "Wellness and Wealth are not separate goals. When we care for our body and mind, we make better decisions with our time and money. Health gives us energy to create, and wealth gives us the freedom to choose.",
    target: "நம் உடலையும் மனதையும் நன்றாக கவனித்துக் கொண்டால், நம் நேரத்தையும் பணத்தையும் பற்றிய சிறந்த முடிவுகளை எடுக்க முடியும். நல்ல ஆரோக்கியம் நமக்கு உருவாக்கும் ஆற்றலை வழங்குகிறது; செல்வம் நமக்கு விரும்பியதைத் தேர்ந்தெடுக்கும் சுதந்திரத்தை அளிக்கிறது.",
    isActive: false
  },
  {
    id: 2,
    source: "Money habits are health habits.\nBudget with intention, spend with awareness, and invest for the future you want.",
    target: "பணப் பழக்கங்கள் என்பவை ஆரோக்கியமான வாழ்க்கைப் பழக்கங்களும் | ஆகும்.\nதெளிவான நோக்கத்துடன் செலவுத் திட்டத்தை அமைக்கவும், விழிப்புணர்வுடன் பணத்தைச் செலவிடவும், நீங்கள் விரும்பும்",
    isActive: true
  },
  {
    id: 3,
    source: "Small daily habits compound over time.\nA few mindful minutes in the morning, nourishing food, regular movement, and focused work lead to better health and steady financial growth.\nConsistency is more powerful than intensity.",
    target: "சிறிய தினசரி பழக்கங்கள் காலப்போக்கில் பெரிய பலன்களை உருவாக்குகின்றன.\nகாலையில் சில நிமிடங்கள் மன ஒருமையுடன் இருப்பது, சத்தான உணவை உட்கொள்வது, தொடர்ந்து உடற்பயிற்சி செய்வது மற்றும் கவனமுடன் வேலை செய்வது ஆகியவை சிறந்த ஆரோக்கியத்திற்கும் நிலையான நிதி வளர்ச்சிக்கும் வழிவகுக்கின்றன.\nதீவிரத்தை விட தொடர்ச்சியே அதிக சக்தி வாய்ந்தது.",
    isActive: false
  }
];

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1500));
  
  return NextResponse.json(translationsData);
}