import svgPaths from "./svg-x39662e6lm";
import imgRectangle196 from "figma:asset/e5bfa6bb6a828db043253eff6a234cb68a6dc3ff.png";
import imgRectangle200 from "figma:asset/cc8a4f7c685cdf53412bf99ad50ac6b06b0c994e.png";
import imgRectangle202 from "figma:asset/e30b3c345b339e605cf808ec83fd7d5e6b491efc.png";
import imgEllipse84 from "figma:asset/d731954761a5ce15be8c7d6c09eaa40f09cf3740.png";
import imgRectangle160 from "figma:asset/970525598366d9d6f6e454340dadab0cf2d38a99.png";
import imgRectangle161 from "figma:asset/5d49c38632ec4017ddb1625a0cc0a2a71da96773.png";
import imgRectangle162 from "figma:asset/629840baa150c67cfdca3afd97222aa5371bdfd9.png";
import imgRectangle163 from "figma:asset/6d675ad64337c6100aa566a0d6ecda7936b8b260.png";
import imgRectangle185 from "figma:asset/626726b2be2595433c28eda2a913cea75a86a8c4.png";
import imgRectangle184 from "figma:asset/738e6e77a92971e6075b85d18be0de93205d90cb.png";
import imgRectangle181 from "figma:asset/35af249cb9f6e3491a3e9412270231a090b01f3b.png";
import imgRectangle182 from "figma:asset/30f597da61c09707ca0a5bdbba669cc16464b701.png";
import imgRectangle183 from "figma:asset/3f078fc6ae1ca777d18432dc9d6d1909922166a0.png";
import imgRectangle186 from "figma:asset/850ea5e79b555779d02fcd6ccebec2b1def760a3.png";
import imgEllipse80 from "figma:asset/0a69d309e01ffb5fa918fe85339a42040628ed85.png";
import imgEllipse81 from "figma:asset/b8e0c6819074150c03f8128b61f7363a6290b752.png";
import imgEllipse82 from "figma:asset/d599d46c7ba94df8f679259feb6c325d3f09478c.png";
import { imgRectangle206 } from "./svg-frlo4";

function Logo() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo">
      <p className="[grid-area:1_/_1] capitalize font-['Helvetica:Bold',sans-serif] leading-[normal] ml-[36px] mt-0 not-italic relative text-[28.235px] text-black text-nowrap tracking-[-2px] whitespace-pre">Embrace</p>
      <div className="[grid-area:1_/_1] ml-0 mt-[7px] relative size-[19px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19 19">
          <circle cx="9.5" cy="9.5" fill="var(--fill-0, #3461FF)" id="Ellipse 87" r="9.5" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center ml-[18px] mt-[6px] relative w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "21", "--transform-inner-height": "18" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[18px] relative w-[21px]">
            <div className="absolute bottom-0 left-[3.52%] right-[3.52%] top-[5.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
                <path d={svgPaths.p17c933b0} fill="var(--fill-0, #3461FF)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Navigation() {
  return (
    <div className="basis-0 capitalize content-stretch flex font-['General_Sans_Variable:Medium',sans-serif] gap-[40px] grow h-full items-center justify-center leading-[normal] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre" data-name="Navigation">
      <p className="relative shrink-0">How it Works</p>
      <p className="relative shrink-0">Our Work</p>
      <p className="relative shrink-0">Pricing</p>
      <p className="relative shrink-0">About Us</p>
    </div>
  );
}

function CtaButton() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] items-start px-[24px] py-[16px] relative rounded-[70px] shrink-0" data-name="CTA Button">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Book a call</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex items-center left-[120px] top-[18px] w-[1201px]" data-name="Container">
      <Logo />
      <div className="basis-0 flex flex-row grow items-center self-stretch shrink-0">
        <Navigation />
      </div>
      <CtaButton />
    </div>
  );
}

function NavBar() {
  return (
    <div className="bg-white h-[88px] relative shrink-0 w-[1440px]" data-name="NavBar">
      <div className="h-[88px] overflow-clip relative rounded-[inherit] w-[1440px]">
        <Container />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start not-italic relative shrink-0">
      <div className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[98.5px] relative shrink-0 text-[96px] text-black tracking-[-4px] w-[518.113px]">
        <p className="mb-0">{`We Take Care of `}</p>
        <p>Your Brand</p>
      </div>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[32px] relative shrink-0 text-[20px] text-[rgba(0,0,0,0.6)] w-[508px]">We care about our work and we care about our clients.</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-neutral-50 box-border content-stretch flex gap-[10px] items-center px-[18px] py-[20px] relative rounded-[37px] shrink-0 w-[339px]">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[37px]" />
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#aaaaaa] text-[18px] text-nowrap whitespace-pre">Enter your Email</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] h-[64px] items-center justify-center px-[24px] py-[20px] relative rounded-[70px] shrink-0 w-[146px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[18px] text-nowrap text-white whitespace-pre">Lets Talk</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function HeroTitle() {
  return (
    <div className="content-stretch flex flex-col gap-[44px] items-start relative shrink-0" data-name="Hero Title">
      <Frame50 />
      <Frame22 />
    </div>
  );
}

function Image() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Image">
      <div className="[grid-area:1_/_1] h-[240px] ml-0 mt-[65px] relative rounded-[119.5px] w-[367px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[119.5px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[119.5px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[119.5px]">
            <img alt="" className="absolute h-[277.29%] left-[-16.14%] max-w-none top-[-14.76%] w-[121.31%]" src={imgRectangle196} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#e0ff22] h-[240px] ml-[241px] mt-[495px] rounded-[119.5px] w-[184px]" />
      <div className="[grid-area:1_/_1] bg-[#ffd360] h-[240px] ml-[425px] mt-[495px] rounded-[119.5px] w-[183px]" />
      <div className="[grid-area:1_/_1] h-[240px] ml-[367px] mt-[65px] relative rounded-[119.5px] w-[241px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[119.5px]">
          <div className="absolute bg-black inset-0 rounded-[119.5px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[119.5px] size-full" src={imgRectangle200} />
        </div>
      </div>
      <div className="[grid-area:1_/_1] bg-[#5d34ff] h-[190px] ml-0 mt-[305px] rounded-[119.5px] w-[241px]" />
      <div className="[grid-area:1_/_1] h-[190px] ml-[241px] mt-[305px] relative rounded-[119.5px] w-[367px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[119.5px]">
          <div className="absolute bg-[#e0ff22] inset-0 rounded-[119.5px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[119.5px]">
            <img alt="" className="absolute h-[150.51%] left-[-2.54%] max-w-none top-[-23.65%] w-[116.35%]" src={imgRectangle202} />
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] h-[240px] ml-0 mt-[495px] relative w-[241px]">
        <img alt="" className="block max-w-none size-full" height="240" src={imgEllipse84} width="241" />
      </div>
      <div className="[grid-area:1_/_1] h-[110.503px] ml-[164px] mt-[422px] relative w-[149.975px]" data-name="Union">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 111">
          <path d={svgPaths.p242e2600} fill="var(--fill-0, black)" id="Union" />
        </svg>
      </div>
      <div className="[grid-area:1_/_1] flex h-[110.503px] items-center justify-center ml-[275px] mt-0 relative w-[149.975px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <div className="h-[110.503px] relative w-[149.975px]" data-name="Union">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 111">
              <path d={svgPaths.p242e2600} fill="var(--fill-0, black)" id="Union" />
            </svg>
          </div>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex items-center justify-center ml-[81px] mt-[343px] relative">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <p className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[105px] not-italic relative text-[84px] text-black text-nowrap whitespace-pre">✏️</p>
        </div>
      </div>
      <p className="[grid-area:1_/_1] capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[122.5px] ml-[284px] mt-[546px] not-italic relative text-[98px] text-black text-nowrap whitespace-pre">👩🏻‍💻</p>
      <p className="[grid-area:1_/_1] capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[122.5px] ml-[467px] mt-[541px] not-italic relative text-[98px] text-black text-nowrap whitespace-pre">👑</p>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.3563372492790222)+(var(--transform-inner-height)*0.9343574047088623)))] items-center justify-center ml-[311.51px] mt-[13.47px] relative w-[calc(1px*((var(--transform-inner-height)*0.3563372492790222)+(var(--transform-inner-width)*0.9343574047088623)))]" style={{ "--transform-inner-width": "75", "--transform-inner-height": "68" } as React.CSSProperties}>
        <div className="flex-none rotate-[339.125deg]">
          <p className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[68.056px] not-italic relative text-[54.444px] text-black text-nowrap whitespace-pre">😍</p>
        </div>
      </div>
      <div className="[grid-area:1_/_1] flex h-[calc(1px*((var(--transform-inner-width)*0.31526827812194824)+(var(--transform-inner-height)*0.9490025639533997)))] items-center justify-center ml-[202.21px] mt-[435.74px] relative w-[calc(1px*((var(--transform-inner-height)*0.31526827812194824)+(var(--transform-inner-width)*0.9490025639533997)))]" style={{ "--transform-inner-width": "75", "--transform-inner-height": "68" } as React.CSSProperties}>
        <div className="flex-none rotate-[18.377deg]">
          <p className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[68.056px] not-italic relative text-[54.444px] text-black text-nowrap whitespace-pre">🤌</p>
        </div>
      </div>
    </div>
  );
}

function Hero() {
  return (
    <div className="absolute content-stretch flex gap-[72px] items-center left-[121px] top-[84px]" data-name="Hero">
      <HeroTitle />
      <Image />
    </div>
  );
}

function HeroSection() {
  return (
    <div className="bg-white h-[941px] overflow-clip relative shrink-0 w-[1440px]" data-name="Hero Section">
      <Hero />
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[479px] top-[78px]">
      <p className="absolute capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] left-[719.5px] not-italic text-[36px] text-black text-center top-[78px] tracking-[-1px] translate-x-[-50%] w-[481px]">Companies we Work with</p>
    </div>
  );
}

function CompanyLogo() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 140 48">
        <g clipPath="url(#clip0_1_997)" id="Company logo">
          <path d={svgPaths.p29323200} fill="var(--fill-0, #1ED760)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_997">
            <rect fill="white" height="48" width="140" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompanyLogo1() {
  return (
    <div className="h-[48px] relative shrink-0 w-[113px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 113 48">
        <g id="Company logo">
          <path d={svgPaths.p3c197e80} fill="var(--fill-0, #EA4335)" id="Vector" />
          <path d={svgPaths.p182f9c00} fill="var(--fill-0, #FBBC05)" id="Vector_2" />
          <path d={svgPaths.p27d9f00} fill="var(--fill-0, #4285F4)" id="Vector_3" />
          <path d={svgPaths.p22e8fe20} fill="var(--fill-0, #34A853)" id="Vector_4" />
          <path d={svgPaths.p18c82a80} fill="var(--fill-0, #EA4335)" id="Vector_5" />
          <path d={svgPaths.p38dba000} fill="var(--fill-0, #4285F4)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo2() {
  return (
    <div className="h-[48px] relative shrink-0 w-[72px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 72 48">
        <g clipPath="url(#clip0_1_1010)" id="Company logo">
          <g id="Vector">
            <path d={svgPaths.p397e6900} fill="#010202" />
            <path d={svgPaths.p2c6dd100} fill="#010202" />
            <path d={svgPaths.p279ab900} fill="#010202" />
            <path d={svgPaths.p2906f200} fill="#010202" />
          </g>
        </g>
        <defs>
          <clipPath id="clip0_1_1010">
            <rect fill="white" height="48" width="72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function CompanyLogo3() {
  return (
    <div className="h-[48px] relative shrink-0 w-[164px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 48">
        <g id="Company logo">
          <path d={svgPaths.p19ec7200} fill="var(--fill-0, #706D6E)" id="Vector" />
          <path d={svgPaths.p2a6d6f00} fill="var(--fill-0, #F1511B)" id="Vector_2" />
          <path d={svgPaths.p2f95b900} fill="var(--fill-0, #80CC28)" id="Vector_3" />
          <path d={svgPaths.pd1eb800} fill="var(--fill-0, #00ADEF)" id="Vector_4" />
          <path d={svgPaths.p399fe980} fill="var(--fill-0, #FBBC09)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo4() {
  return (
    <div className="h-[48px] relative shrink-0 w-[127px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 48">
        <g id="Company logo">
          <path d={svgPaths.p233c80} fill="var(--fill-0, #95BF47)" id="Vector" />
          <path d={svgPaths.p2ed03400} fill="var(--fill-0, #5E8E3E)" id="Vector_2" />
          <path d={svgPaths.p3bbe0b00} fill="var(--fill-0, white)" id="Vector_3" />
          <g id="Vector_4">
            <path d={svgPaths.p3af83180} fill="black" />
            <path d={svgPaths.p2eb6d000} fill="black" />
            <path d={svgPaths.p1e00a300} fill="black" />
            <path d={svgPaths.p1cefc200} fill="black" />
            <path d={svgPaths.p273b2600} fill="black" />
            <path d={svgPaths.p27d0a800} fill="black" />
            <path d={svgPaths.padc7f00} fill="black" />
            <path d={svgPaths.p3b5ef600} fill="black" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[120px] top-[227px] w-[1200px]">
      <CompanyLogo />
      <CompanyLogo1 />
      <CompanyLogo2 />
      <CompanyLogo3 />
      <CompanyLogo4 />
    </div>
  );
}

function CompanyLogo5() {
  return (
    <div className="h-[48px] relative shrink-0 w-[164px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 164 48">
        <g id="Company logo">
          <path d={svgPaths.p2f684800} fill="var(--fill-0, black)" id="Vector" />
          <path d={svgPaths.p1b532080} fill="var(--fill-0, #00A82D)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo6() {
  return (
    <div className="h-[48px] relative shrink-0 w-[133px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 133 48">
        <g id="Company logo">
          <path d="M14.635 6H0V41L14.635 6Z" fill="var(--fill-0, #FA0C00)" id="Vector" />
          <path d={svgPaths.p3e940400} fill="var(--fill-0, #FA0C00)" id="Vector_2" />
          <path d={svgPaths.p24855d00} fill="var(--fill-0, #FA0C00)" id="Vector_3" />
          <path d={svgPaths.p1c06700} fill="var(--fill-0, #FA0C00)" id="Vector_4" />
          <path d={svgPaths.p17e28dc0} fill="var(--fill-0, #FA0C00)" id="Vector_5" />
          <path d={svgPaths.p1f87f100} fill="var(--fill-0, #FA0C00)" id="Vector_6" />
          <path d={svgPaths.p18632900} fill="var(--fill-0, #FA0C00)" id="Vector_7" />
          <path d={svgPaths.p2df11700} fill="var(--fill-0, #FA0C00)" id="Vector_8" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo7() {
  return (
    <div className="h-[48px] relative shrink-0 w-[143px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 143 48">
        <g id="Company logo">
          <g id="Vector">
            <path d={svgPaths.p2b168500} fill="#253B80" />
            <path d={svgPaths.p262ce200} fill="#253B80" />
            <path d={svgPaths.p239b8f00} fill="#253B80" />
          </g>
          <g id="Vector_2">
            <path d={svgPaths.p3338f300} fill="#179BD7" />
            <path d={svgPaths.p1b48f300} fill="#179BD7" />
            <path d={svgPaths.p22f5b080} fill="#179BD7" />
          </g>
          <path d={svgPaths.p258e0320} fill="var(--fill-0, #253B80)" id="Vector_3" />
          <path d={svgPaths.p3783e280} fill="var(--fill-0, #179BD7)" id="Vector_4" />
          <path d={svgPaths.p34d32480} fill="var(--fill-0, #222D65)" id="Vector_5" />
          <path d={svgPaths.p33ccc600} fill="var(--fill-0, #253B80)" id="Vector_6" />
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo8() {
  return (
    <div className="h-[48px] relative shrink-0 w-[110px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 110 48">
        <g id="Company logo">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3c900200} fill="#FF9900" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p26664580} fill="#FF9900" fillRule="evenodd" />
          </g>
          <g id="Vector_2">
            <path clipRule="evenodd" d={svgPaths.p39482300} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2eeed80} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1b168600} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p1b6f2400} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p2745db00} fill="black" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p38575b00} fill="black" fillRule="evenodd" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function CompanyLogo9() {
  return (
    <div className="h-[48px] relative shrink-0 w-[127px]" data-name="Company logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 127 48">
        <g id="Company logo">
          <g id="Vector">
            <path clipRule="evenodd" d={svgPaths.p3bcb7400} fill="#0D0E10" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.pf8a5100} fill="#0D0E10" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p3e64a700} fill="#0D0E10" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p259c200} fill="#0D0E10" fillRule="evenodd" />
            <path clipRule="evenodd" d={svgPaths.p271d4e00} fill="#0D0E10" fillRule="evenodd" />
          </g>
          <path clipRule="evenodd" d={svgPaths.p31b76c80} fill="var(--fill-0, #F06A6A)" fillRule="evenodd" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute content-stretch flex items-center justify-between left-[120px] top-[369px] w-[1200px]">
      <CompanyLogo5 />
      <CompanyLogo6 />
      <CompanyLogo7 />
      <CompanyLogo8 />
      <CompanyLogo9 />
    </div>
  );
}

function Partners() {
  return (
    <div className="bg-neutral-50 h-[552px] overflow-clip relative shrink-0 w-[1440px]" data-name="Partners">
      <Group3 />
      <Frame23 />
      <Frame24 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[121px] not-italic top-[137px]" data-name="Container">
      <p className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[normal] relative shrink-0 text-[#0b0b0b] text-[64px] text-nowrap whitespace-pre">245%</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[215px]">More revenues for the brand</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[425px] not-italic top-[138px]" data-name="Container">
      <p className="capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[normal] relative shrink-0 text-[#0b0b0b] text-[64px] text-nowrap whitespace-pre">130K+</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[155px]">{`Audiences reached `}</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col items-start left-[121px] not-italic top-[289px]" data-name="Container">
      <p className="font-['General_Sans_Variable:Semibold',sans-serif] leading-[normal] relative shrink-0 text-[#0b0b0b] text-[64px] text-nowrap whitespace-pre">50+</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] font-['General_Sans_Variable:Regular',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[155px]">brands trust us</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute capitalize content-stretch flex flex-col items-start left-[425px] not-italic top-[289px]" data-name="Container">
      <p className="font-['General_Sans_Variable:Semibold',sans-serif] leading-[normal] relative shrink-0 text-[#0b0b0b] text-[64px] text-nowrap whitespace-pre">24+</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[24px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[169px]">Worldwide awards</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[20px] items-start left-[730px] not-italic top-[137px]">
      <p className="capitalize leading-[normal] relative shrink-0 text-[64px] text-black tracking-[-1px] w-[502px]">commitments</p>
      <p className="leading-[32px] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] w-[576px]">We are committed to working with you collaboratively to understand your goals and create a strategy that will achieve them.</p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[730px] top-[369px]">
      <p className="absolute capitalize font-['General_Sans_Variable:Semibold',sans-serif] leading-[24px] left-[730px] not-italic text-[#3461ff] text-[18px] top-[369px] w-[105px]">Learn More</p>
      <div className="absolute inset-[69.96%_40.98%_27.6%_57.99%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
          <path clipRule="evenodd" d={svgPaths.p39fa0b80} fill="var(--fill-0, #3461FF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function OurCommitments() {
  return (
    <div className="h-[536px] overflow-clip relative shrink-0 w-[1440px]" data-name="Our Commitments">
      <Container1 />
      <Container2 />
      <Container3 />
      <Container4 />
      <Frame21 />
      <Group1 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="absolute content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[15px] items-start left-[120px] not-italic top-[100px]">
      <p className="capitalize leading-[normal] relative shrink-0 text-[64px] text-black tracking-[-1px] w-[402px]">how it Works</p>
      <p className="leading-[36px] relative shrink-0 text-[18px] text-[rgba(0,0,0,0.6)] w-[499px]">We believe that the best way to create successful marketing campaigns is to work closely with our clients to understand their goals and challenges.</p>
    </div>
  );
}

function HeroiconsSolidLightningBolt() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="heroicons-solid:lightning-bolt">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g clipPath="url(#clip0_1_962)" id="heroicons-solid:lightning-bolt">
          <path clipRule="evenodd" d={svgPaths.p19f434f2} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_962">
            <rect fill="white" height="46" width="46" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function MajesticonsDollarCircle() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[30px] relative rounded-[24px] shrink-0" data-name="majesticons:dollar-circle">
      <HeroiconsSolidLightningBolt />
    </div>
  );
}

function Frame51() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="capitalize leading-[normal] relative shrink-0 text-[32px] text-black w-[179px]">Discovery</p>
      <p className="leading-[32px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[min-content]">We meet with you to learn about your business, your goals, and your target audience.</p>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-[590px]">
      <MajesticonsDollarCircle />
      <Frame51 />
    </div>
  );
}

function FluentChess20Filled() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="fluent:chess-20-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="fluent:chess-20-filled">
          <path d={svgPaths.p3fccf80} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MajesticonsDollarCircle1() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[30px] relative rounded-[24px] shrink-0" data-name="majesticons:dollar-circle">
      <FluentChess20Filled />
    </div>
  );
}

function Frame63() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="capitalize leading-[normal] relative shrink-0 text-[32px] text-black w-[179px]">Strategy</p>
      <p className="leading-[32px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[min-content]">We develop a customized marketing strategy that is based on your unique needs and goals.</p>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-[590px]">
      <MajesticonsDollarCircle1 />
      <Frame63 />
    </div>
  );
}

function FluentTargetArrow16Filled() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="fluent:target-arrow-16-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="fluent:target-arrow-16-filled">
          <path d={svgPaths.pd1d0f00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MajesticonsDollarCircle2() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[30px] relative rounded-[24px] shrink-0" data-name="majesticons:dollar-circle">
      <FluentTargetArrow16Filled />
    </div>
  );
}

function Frame64() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="capitalize leading-[normal] relative shrink-0 text-[32px] text-black w-[179px]">Execution</p>
      <p className="leading-[32px] min-w-full relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-[min-content]">We execute our strategy using the latest digital marketing tools and techniques.</p>
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-[590px]">
      <MajesticonsDollarCircle2 />
      <Frame64 />
    </div>
  );
}

function PhRulerFill() {
  return (
    <div className="relative shrink-0 size-[46px]" data-name="ph:ruler-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 46">
        <g id="ph:ruler-fill">
          <path d={svgPaths.p3df5d180} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function MajesticonsDollarCircle3() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] items-center justify-center p-[30px] relative rounded-[24px] shrink-0" data-name="majesticons:dollar-circle">
      <PhRulerFill />
    </div>
  );
}

function Frame65() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[12px] grow items-start min-h-px min-w-px not-italic relative shrink-0">
      <p className="capitalize leading-[normal] relative shrink-0 text-[32px] text-black w-full">Measurement</p>
      <p className="leading-[32px] relative shrink-0 text-[16px] text-[rgba(0,0,0,0.6)] w-full">We track the results of our campaigns so that we can make adjustments as needed.</p>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[32px] items-center justify-center relative shrink-0 w-[590px]">
      <MajesticonsDollarCircle3 />
      <Frame65 />
    </div>
  );
}

function Frame56() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[42px] items-start left-[730px] top-[100px]">
      <Frame52 />
      <Frame53 />
      <Frame54 />
      <Frame55 />
    </div>
  );
}

function HowItWorks() {
  return (
    <div className="h-[804px] overflow-clip relative shrink-0 w-[1440px]" data-name="How it works">
      <Frame57 />
      <div className="absolute h-[311px] left-[120px] rounded-[40px] top-[391px] w-[487px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[40px]">
          <img alt="" className="absolute h-[162.38%] left-0 max-w-none top-[-32.32%] w-[103.7%]" src={imgRectangle160} />
        </div>
      </div>
      <Frame56 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap whitespace-pre">Apple</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="h-[324px] relative rounded-[40px] shrink-0 w-[400px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[40px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgRectangle161} />
        </div>
      </div>
      <Frame26 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap whitespace-pre">Coca-cola</p>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="h-[324px] relative rounded-[40px] shrink-0 w-[400px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[40px]" />
          <div className="absolute inset-0 overflow-hidden rounded-[40px]">
            <img alt="" className="absolute h-[154.32%] left-0 max-w-none top-[-27.16%] w-full" src={imgRectangle162} />
          </div>
        </div>
      </div>
      <Frame31 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[28px] text-black text-center text-nowrap whitespace-pre">Nike</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
      <div className="h-[324px] relative rounded-[40px] shrink-0 w-[400px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[40px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[40px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[40px] size-full" src={imgRectangle163} />
        </div>
      </div>
      <Frame32 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-[100px] top-[304px]">
      <Frame27 />
      <Frame28 />
      <Frame29 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute bg-[#3461ff] box-border content-stretch flex gap-[10px] items-start left-[calc(50%-0.5px)] px-[48px] py-[16px] rounded-[64px] top-[734px] translate-x-[-50%]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">See More</p>
    </div>
  );
}

function OurWork() {
  return (
    <div className="h-[920px] overflow-clip relative shrink-0 w-[1440px]" data-name="Our Work">
      <p className="absolute capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] left-[580px] not-italic text-[64px] text-black text-nowrap top-[122px] whitespace-pre">Our Work</p>
      <p className="absolute font-['General_Sans_Variable:Medium',sans-serif] leading-[32px] left-[720px] not-italic text-[18px] text-[rgba(0,0,0,0.6)] text-center top-[220px] translate-x-[-50%] w-[756px]">A glimpse of our portfolio</p>
      <Frame30 />
      <Frame />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute h-[463.693px] left-[-399.54px] top-[-44px] w-[1144.83px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1145 464">
        <g id="Group 584">
          <ellipse cx="669.863" cy="231.846" fill="url(#paint0_linear_1_935)" id="Ellipse 74" rx="231.846" ry="230.36" transform="rotate(90 669.863 231.846)" />
          <ellipse cx="914.471" cy="231.846" fill="url(#paint1_linear_1_935)" id="Ellipse 77" rx="231.846" ry="230.36" transform="rotate(90 914.471 231.846)" />
          <ellipse cx="450.112" cy="231.846" fill="url(#paint2_linear_1_935)" id="Ellipse 75" rx="231.846" ry="230.36" transform="rotate(90 450.112 231.846)" />
          <ellipse cx="230.36" cy="231.846" fill="url(#paint3_linear_1_935)" id="Ellipse 76" rx="231.846" ry="230.36" transform="rotate(90 230.36 231.846)" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_1_935" x1="672.024" x2="693.359" y1="42.0245" y2="490.795">
            <stop stopColor="#3461FF" />
            <stop offset="1" stopColor="#8399E9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_1_935" x1="916.632" x2="937.967" y1="42.0245" y2="490.795">
            <stop stopColor="#3461FF" />
            <stop offset="1" stopColor="#8399E9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_1_935" x1="452.273" x2="473.608" y1="42.0245" y2="490.795">
            <stop stopColor="#3461FF" />
            <stop offset="1" stopColor="#8399E9" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint3_linear_1_935" x1="232.521" x2="253.856" y1="42.0245" y2="490.795">
            <stop stopColor="#3461FF" />
            <stop offset="1" stopColor="#8399E9" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-white box-border content-stretch flex gap-[10px] items-start px-[48px] py-[16px] relative rounded-[64px] shrink-0">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">Book Call</p>
    </div>
  );
}

function Frame62() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[32px] items-start left-[660px] top-[calc(50%+0.5px)] translate-y-[-50%]">
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[40px] not-italic relative shrink-0 text-[20px] text-white w-[483px]">{`Ready to transform your digital dresence? Let's create magic together! book our services now!`}</p>
      <Frame1 />
    </div>
  );
}

function CtaBanner() {
  return (
    <div className="absolute bg-[#3561ff] h-[371px] left-1/2 overflow-clip rounded-[32px] top-[100px] translate-x-[-50%] w-[1200px]" data-name="CTA Banner">
      <Group />
      <p className="absolute capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[87px] left-[calc(50%-526px)] not-italic text-[64px] text-white top-[calc(50%-94.5px)] tracking-[-1px] w-[393px]">Elevate your brand Today!</p>
      <Frame62 />
    </div>
  );
}

function CtaBanner1() {
  return (
    <div className="h-[573px] overflow-clip relative shrink-0 w-[1440px]" data-name="CTA Banner">
      <CtaBanner />
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="relative rounded-[26.345px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26.345px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[26.345px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[26.345px] size-full" src={imgRectangle185} />
        </div>
      </div>
      <div className="relative rounded-[26.207px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26.207px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[26.207px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[26.207px] size-full" src={imgRectangle184} />
        </div>
      </div>
      <div className="relative rounded-[114px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[114px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[114px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[114px] size-full" src={imgRectangle181} />
        </div>
      </div>
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="relative rounded-[115px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[115px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[115px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[115px] size-full" src={imgRectangle182} />
        </div>
      </div>
      <div className="relative rounded-[26.069px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26.069px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[26.069px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[26.069px] size-full" src={imgRectangle183} />
        </div>
      </div>
      <div className="relative rounded-[26.207px] shrink-0 size-[190px]">
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[26.207px]">
          <div className="absolute bg-[#d9d9d9] inset-0 rounded-[26.207px]" />
          <img alt="" className="absolute max-w-none object-50%-50% object-cover rounded-[26.207px] size-full" src={imgRectangle186} />
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[121px] top-[119px]">
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute bg-[#3461ff] box-border content-stretch flex gap-[10px] items-start left-[833px] px-[48px] py-[16px] rounded-[69px] top-[455px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Learn More</p>
    </div>
  );
}

function OurTeam() {
  return (
    <div className="h-[636px] overflow-clip relative shrink-0 w-[1440px]" data-name="Our Team">
      <Frame60 />
      <p className="absolute capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] left-[833px] not-italic text-[64px] text-black top-[119px] tracking-[-1px] w-[474px]">Meet Our Team</p>
      <p className="absolute font-['General_Sans_Variable:Regular',sans-serif] leading-[32px] left-[833px] not-italic text-[16px] text-[rgba(0,0,0,0.6)] top-[232px] w-[486px] whitespace-pre-wrap">{`Discover the brilliance behind  Embrace. Our team blends innovation and artistry to craft digital wonders that captivate`}</p>
      <Frame14 />
    </div>
  );
}

function Frame33() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[9px] items-start left-[120px] top-[94px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[64px] text-black tracking-[-1px] w-[899px]">What Our Client Said about us</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-white w-[320px]">
      <p className="font-['General_Sans_Variable:Semibold',sans-serif] min-w-full relative shrink-0 text-[28px] w-[min-content]">Amelia Joseph</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] relative shrink-0 text-[20px] text-nowrap whitespace-pre">Chief Manager</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[19px] grow items-start min-h-px min-w-px relative shrink-0">
      <Frame6 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0 w-[314px]">
      <div className="relative shrink-0 size-[85px]">
        <img alt="" className="block max-w-none size-full" height="85" src={imgEllipse80} width="85" />
      </div>
      <Frame7 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex flex-col gap-[19px] items-start pl-[40px] pr-[73px] py-[40px] relative rounded-[30px] shrink-0">
      <Frame10 />
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.8)] w-[400px]">My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-black">
      <p className="font-['General_Sans_Variable:Semibold',sans-serif] relative shrink-0 text-[28px] w-[196px]">Jacob Joshua</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] relative shrink-0 text-[20px] text-nowrap whitespace-pre">Chief Manager</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0">
      <Frame8 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[85px]">
        <img alt="" className="block max-w-none size-full" height="85" src={imgEllipse81} width="85" />
      </div>
      <Frame9 />
    </div>
  );
}

function Frame15() {
  return (
    <div className="bg-[#f8f9ff] box-border content-stretch flex flex-col gap-[19px] items-start justify-center pl-[40px] pr-[73px] py-[40px] relative rounded-[30px] shrink-0">
      <Frame12 />
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[400px]">{`I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it's got to be Embrace!`}</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="capitalize content-stretch flex flex-col gap-[10px] items-start leading-[normal] not-italic relative shrink-0 text-black">
      <p className="font-['General_Sans_Variable:Semibold',sans-serif] relative shrink-0 text-[28px] w-[196px]">Jacob Joshua</p>
      <p className="font-['General_Sans_Variable:Medium',sans-serif] relative shrink-0 text-[20px] text-nowrap whitespace-pre">Chief Manager</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-col gap-[19px] items-start relative shrink-0">
      <Frame13 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[20px] items-start relative shrink-0">
      <div className="relative shrink-0 size-[85px]">
        <img alt="" className="block max-w-none size-full" height="85" src={imgEllipse82} width="85" />
      </div>
      <Frame17 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="bg-[#f8f9ff] box-border content-stretch flex flex-col gap-[19px] items-start pl-[40px] pr-[73px] py-[40px] relative rounded-[30px] shrink-0">
      <Frame19 />
      <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[32px] not-italic relative shrink-0 text-[16px] text-[rgba(0,0,0,0.8)] w-[400px]">{`Embrace really nails it! Creative brilliance, approachable style. They're the partners you want—artistry meets strategy. Thrilled with what they achieved!"`}</p>
    </div>
  );
}

function Frame34() {
  return (
    <div className="absolute content-stretch flex gap-[20px] items-start left-[120px] top-[248px]">
      <Frame11 />
      <Frame15 />
      <Frame16 />
    </div>
  );
}

function BiArrowLeftShort() {
  return (
    <div className="relative size-[49px]" data-name="bi:arrow-left-short">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="bi:arrow-left-short">
          <path clipRule="evenodd" d={svgPaths.p2e6b6c00} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BiArrowLeftShort1() {
  return (
    <div className="absolute left-[1150px] size-[49px] top-[123px]" data-name="bi:arrow-left-short">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
        <g id="bi:arrow-left-short">
          <path clipRule="evenodd" d={svgPaths.p3d5d6600} fill="var(--fill-0, black)" fillOpacity="0.3" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Testimonial() {
  return (
    <div className="h-[666px] overflow-clip relative shrink-0 w-[1439px]" data-name="Testimonial">
      <Frame33 />
      <Frame34 />
      <div className="absolute left-[1237px] size-[85px] top-[105px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
          <circle cx="42.5" cy="42.5" fill="var(--fill-0, #3461FF)" id="Ellipse 78" r="42.5" />
        </svg>
      </div>
      <div className="absolute left-[1132px] size-[85px] top-[105px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 85 85">
          <circle cx="42.5" cy="42.5" fill="var(--fill-0, #F8F9FF)" id="Ellipse 79" r="42.5" />
        </svg>
      </div>
      <div className="absolute flex items-center justify-center left-[1255px] size-[49px] top-[123px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <BiArrowLeftShort />
        </div>
      </div>
      <BiArrowLeftShort1 />
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[-61px] top-[-85px]">
      <div className="absolute left-[-61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[183px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[-61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[183px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[-61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[183px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[-61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[183px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[-61px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[183px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[112.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.111px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[112.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.111px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[112.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.111px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[112.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.111px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[112.89px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[9.111px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[286.78px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-164.778px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[286.78px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-164.778px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[286.78px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-164.778px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[286.78px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-164.778px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[286.78px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-164.778px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[460.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-338.667px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[460.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-338.667px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[460.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-338.667px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[460.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-338.667px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[460.67px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-338.667px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[634.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-512.556px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[634.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-512.556px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[634.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-512.556px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[634.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-512.556px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[634.56px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-512.556px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[808.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686.444px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[808.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686.444px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[808.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686.444px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[808.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686.444px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[808.44px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-686.444px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[982.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-860.333px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[982.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-860.333px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[982.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-860.333px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[982.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-860.333px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[982.33px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-860.333px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1156.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1034.22px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1156.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1034.22px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1156.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1034.22px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1156.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1034.22px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1156.22px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1034.22px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1330.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1208.11px_207px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[-85px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1330.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1208.11px_33.111px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[88.89px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1330.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1208.11px_-140.778px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[262.78px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1330.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1208.11px_-314.667px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[436.67px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="absolute left-[1330.11px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-1208.11px_-488.555px] mask-size-[1200px_455px] opacity-10 size-[173.889px] top-[610.56px]" style={{ maskImage: `url('${imgRectangle206}')` }}>
        <div aria-hidden="true" className="absolute border-[#d9d9d9] border-[1.311px] border-solid inset-0 pointer-events-none" />
      </div>
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents left-[122px] top-[122px]" data-name="Mask group">
      <Group5 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute bg-[#3461ff] box-border content-stretch flex gap-[10px] items-start left-[201px] px-[48px] py-[16px] rounded-[69px] top-[430px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Start Now</p>
    </div>
  );
}

function CtaBanner2() {
  return (
    <div className="absolute contents left-[122px] top-[122px]" data-name="CTA Banner 2">
      <div className="absolute bg-[#232038] h-[455px] left-[calc(50%+2px)] rounded-[56px] top-[122px] translate-x-[-50%] w-[1200px]" />
      <MaskGroup />
      <Frame18 />
      <p className="absolute capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[63px] left-[201px] not-italic text-[56px] text-white top-[224px] w-[521px]">start your journey with us now</p>
      <div className="absolute left-[883px] size-[352px] top-[174px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 352">
          <circle cx="176" cy="176" fill="var(--fill-0, #E0FF22)" id="Ellipse 86" r="176" />
        </svg>
      </div>
      <div className="absolute inset-[44.71%_19.02%_43.71%_71.6%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 136 82">
          <path d={svgPaths.p863a200} fill="var(--fill-0, #3461FF)" id="Vector" />
        </svg>
      </div>
      <div className="absolute inset-[43.86%_29.44%_42.64%_66.04%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 65 95">
          <path d={svgPaths.p3273d400} fill="var(--fill-0, #3461FF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function CtaBanner3() {
  return (
    <div className="bg-white h-[700px] overflow-clip relative shrink-0 w-[1440px]" data-name="CTA Banner 2">
      <CtaBanner2 />
    </div>
  );
}

function Frame35() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[32px] relative w-full">
          <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">How do i sign up for the project?</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsAddCircleRounded() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:add-circle-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:add-circle-rounded">
          <path d={svgPaths.pf5a7300} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[616px]">
      <Frame35 />
      <MaterialSymbolsAddCircleRounded />
    </div>
  );
}

function Frame36() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[32px] relative w-full">
          <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">What thing that i should prepare before starting?</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsAddCircleRounded1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:add-circle-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:add-circle-rounded">
          <path d={svgPaths.pf5a7300} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[616px]">
      <Frame36 />
      <MaterialSymbolsAddCircleRounded1 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[10px] py-[32px] relative w-full">
          <p className="font-['General_Sans_Variable:Medium',sans-serif] leading-[36px] not-italic relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre">Does my company need help for marketing advices?</p>
        </div>
      </div>
    </div>
  );
}

function MaterialSymbolsAddCircleRounded2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="material-symbols:add-circle-rounded">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="material-symbols:add-circle-rounded">
          <path d={svgPaths.pf5a7300} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[616px]">
      <Frame37 />
      <MaterialSymbolsAddCircleRounded2 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0">
      <div className="h-0 relative shrink-0 w-[616px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 1">
            <path d="M0 0.5H616" id="Vector 3" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame41 />
      <div className="h-0 relative shrink-0 w-[616px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 1">
            <path d="M0 0.5H616" id="Vector 3" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame40 />
      <div className="h-0 relative shrink-0 w-[616px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 1">
            <path d="M0 0.5H616" id="Vector 3" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
      <Frame39 />
      <div className="h-0 relative shrink-0 w-[616px]">
        <div className="absolute bottom-[-0.5px] left-0 right-0 top-[-0.5px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 616 1">
            <path d="M0 0.5H616" id="Vector 3" stroke="var(--stroke-0, black)" strokeOpacity="0.2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[16px] items-start not-italic relative shrink-0">
      <p className="capitalize leading-[52px] relative shrink-0 text-[40px] text-black tracking-[-1px] w-[487px]">{`How we can help you? `}</p>
      <p className="leading-[36px] opacity-75 relative shrink-0 text-[20px] text-[rgba(0,0,0,0.6)] w-[431px]">Follow our newsletter. We will regulary update our latest project and availability.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="basis-0 bg-neutral-50 grow min-h-px min-w-px relative rounded-[37px] shrink-0">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center px-[18px] py-[20px] relative w-full">
          <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#aaaaaa] text-[16px] text-nowrap whitespace-pre">Enter your Email</p>
        </div>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#3461ff] box-border content-stretch flex gap-[10px] h-[62px] items-center justify-center px-[24px] py-[20px] relative rounded-[70px] shrink-0 w-[144px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-nowrap text-white whitespace-pre">Lets Talk</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
      <Frame38 />
      <Frame25 />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <p className="[grid-area:1_/_1] [text-decoration-skip-ink:none] [text-underline-position:from-font] capitalize decoration-solid font-['General_Sans_Variable:Semibold',sans-serif] leading-[24px] ml-0 mt-0 not-italic relative text-[#3461ff] text-[20px] underline w-[105px]">more FAQ</p>
      <div className="[grid-area:1_/_1] h-[13.064px] ml-[105px] mt-[6px] relative w-[14.93px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 14">
          <path clipRule="evenodd" d={svgPaths.p39fa0b80} fill="var(--fill-0, #3461FF)" fillRule="evenodd" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col gap-[42px] items-start relative shrink-0 w-[464px]">
      <Frame43 />
      <Group2 />
    </div>
  );
}

function Frame45() {
  return (
    <div className="absolute content-stretch flex gap-[120px] items-start left-[119px] top-[141px] w-[1200px]">
      <Frame42 />
      <Frame44 />
    </div>
  );
}

function Help() {
  return (
    <div className="h-[582px] overflow-clip relative shrink-0 w-[1439px]" data-name="Help">
      <Frame45 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[48px] items-start leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0">Work With Us</p>
      <p className="relative shrink-0">Advertise With Us</p>
      <p className="relative shrink-0">Support Us</p>
      <p className="relative shrink-0">Business Advices</p>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[48px] items-start leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0">Private Coaching</p>
      <p className="relative shrink-0">Our Work</p>
      <p className="relative shrink-0">Our Commitment</p>
      <p className="relative shrink-0">Our Team</p>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex flex-col font-['General_Sans_Variable:Medium',sans-serif] gap-[48px] items-start leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-nowrap whitespace-pre">
      <p className="relative shrink-0">About Us</p>
      <p className="relative shrink-0">FAQs</p>
      <p className="relative shrink-0">Report a Bug</p>
    </div>
  );
}

function Frame49() {
  return (
    <div className="absolute content-stretch flex gap-[75px] items-start left-[734px] top-[86px]">
      <Frame47 />
      <Frame48 />
      <Frame66 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute bg-[#3461ff] box-border content-stretch flex gap-[10px] items-center justify-center left-[120px] px-[48px] py-[16px] rounded-[69px] top-[258px] w-[217px]">
      <p className="capitalize font-['General_Sans_Variable:Medium',sans-serif] leading-[normal] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">Contact Us</p>
    </div>
  );
}

function RiInstagramFill() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="ri:instagram-fill">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="ri:instagram-fill">
          <path d={svgPaths.pb932500} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function BiTwitter() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="bi:twitter">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="bi:twitter">
          <path d={svgPaths.p12be0c00} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function IcBaselineFacebook() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="ic:baseline-facebook">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="ic:baseline-facebook">
          <path d={svgPaths.p68f3f00} fill="var(--fill-0, #3461FF)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame61() {
  return (
    <div className="absolute content-stretch flex gap-[47px] items-start left-[139px] top-[160px]">
      <RiInstagramFill />
      <BiTwitter />
      <IcBaselineFacebook />
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[127px] top-[62px]">
      <p className="absolute capitalize font-['Helvetica:Bold',sans-serif] leading-[normal] left-[173.62px] not-italic text-[36.563px] text-black text-nowrap top-[62px] tracking-[-2.5899px] whitespace-pre">Embrace</p>
      <div className="absolute left-[127px] size-[24.604px] top-[71.06px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
          <circle cx="12.3019" cy="12.3019" fill="var(--fill-0, #3461FF)" id="Ellipse 87" r="12.3019" />
        </svg>
      </div>
      <div className="absolute flex h-[calc(1px*((var(--transform-inner-width)*1)+(var(--transform-inner-height)*0)))] items-center justify-center left-[150.31px] top-[69.77px] w-[calc(1px*((var(--transform-inner-height)*1)+(var(--transform-inner-width)*0)))]" style={{ "--transform-inner-width": "27", "--transform-inner-height": "23" } as React.CSSProperties}>
        <div className="flex-none rotate-[90deg]">
          <div className="h-[23.309px] relative w-[27.194px]">
            <div className="absolute bottom-0 left-[3.52%] right-[3.52%] top-[5.47%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 26 23">
                <path d={svgPaths.p2f7eebb0} fill="var(--fill-0, #3461FF)" id="Polygon 1" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="bg-neutral-50 h-[392px] overflow-clip relative shrink-0 w-[1440px]" data-name="Bottom">
      <Frame49 />
      <Frame20 />
      <Frame61 />
      <Group4 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="absolute content-stretch flex font-['General_Sans_Variable:Medium',sans-serif] gap-[125px] items-start leading-[20px] left-[1043px] not-italic text-[14px] text-nowrap text-white top-[50px] whitespace-pre">
      <p className="relative shrink-0">{`Terms of use   `}</p>
      <p className="relative shrink-0">{`Privacy policy `}</p>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black h-[119px] overflow-clip relative shrink-0 w-[1440px]" data-name="Footer">
      <p className="absolute font-['General_Sans_Variable:Medium',sans-serif] leading-[20px] left-[100px] not-italic text-[14px] text-nowrap text-white top-[50px] whitespace-pre">© 2022 Embrace, Inc. - All Rights Reserved</p>
      <Frame46 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-white content-stretch flex flex-col items-end relative size-full" data-name="Landing Page">
      <NavBar />
      <HeroSection />
      <Partners />
      <OurCommitments />
      <HowItWorks />
      <OurWork />
      <CtaBanner1 />
      <OurTeam />
      <Testimonial />
      <CtaBanner3 />
      <Help />
      <Bottom />
      <Footer />
    </div>
  );
}