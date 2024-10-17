import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Blog</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img 
        className="headerImg" 
        src="https://c4.wallpaperflare.com/wallpaper/410/867/750/vector-forest-sunset-forest-sunset-forest-wallpaper-preview.jpg" 
        alt="Blog Header"
      />
    </div>
  );
}
