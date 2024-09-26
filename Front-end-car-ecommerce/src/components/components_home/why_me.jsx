import backgroundImage from "../../assets/Logo/logo_footer/why-me-1.png";

function WhyMe() {
  const sectionStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return (
    <section
      className="md:h-[604px] h-[300px] w-auto flex flex-col text-center justify-center py-16 text-white mt-20"
      style={sectionStyle}
    >
      <div className=" md:text-[48px] text-[20px] font-extrabold">
        ทำไมต้องใช้บริการกับเรา?
      </div><br/> 
      <div className="md:text-[16px] text-[12px] md:w-[1128px] font-light whitespace-pre-line md:place-self-center px-6">
        <p className="hidden md:block">เรามีความเชี่ยวชาญและประสบการณ์ในวงการรถยนต์มายาวนาน มีบริการที่หลากหลายและครบวงจรทั้งการเช่า การซื้อขายรถยนต์ที่ตอบโจทย์ทุกความต้องการของลูกค้า</p><br/>
        <p>- บริการซื้อรถ: เรามีรถยนต์มือสองคุณภาพสูง ผ่านการตรวจสอบมาตรฐาน พร้อมให้คำแนะนำจากผู้เชี่ยวชาญในการเลือกซื้อรถที่เหมาะสม</p><br/>
        <p>- บริการขายรถ: เราช่วยท่านในการขายรถได้รวดเร็วและสะดวกสบาย ด้วยทีมงานที่มีความชำนาญในการประเมินราคาที่ยุติธรรม เรายินดีให้บริการด้วยความใส่ใจและมุ่งมั่นในการตอบสนองความต้องการของลูกค้าเพื่อความพึงพอใจสูงสุด</p><br/> 
      </div>
    </section>
  );
}

export default WhyMe;