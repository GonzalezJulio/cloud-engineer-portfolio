import profolio from "@/assets/images/porfolio.png";

export function HeroImage() {
  return (
    <div className="flex justify-center items-center">
      <img
        src={profolio}
        alt="Julio Gonzalez"
         className="w-72 h-72 rounded-full border-4 border-sky-600 mb-4"
        
      />
    </div>
  );
} 