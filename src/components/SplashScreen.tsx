import ngalatiImg from "../assets/ngalati.jpeg";

export default function SplashScreen() {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          <div className="splash-ring" />
          <div className="splash-ring delay-700" />
          <img
            src={ngalatiImg}
            alt="Wangu Ngalati"
            className="w-36 h-36 rounded-full object-cover border-4 border-primary shadow-xl"
          />
        </div>
        <div className="text-lg font-semibold text-primary">Wangu Ngalati</div>
        <div className="text-sm text-muted-foreground tracking-wide">
          Loading portfolio...
        </div>
      </div>
    </div>
  );
}
