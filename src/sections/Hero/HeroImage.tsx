import perfil from "@/assets/images/perfil.png";

export function HeroImage() {
  return (
    <div className="flex justify-center items-center">
      <img
        src={perfil}
        alt="Julio Gonzalez"
         className="w-72 h-72 rounded-full border-4 border-sky-600 mb-4"
        
      />
    </div>
  );
} 