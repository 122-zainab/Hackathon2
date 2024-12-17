import Image from "next/image";
import TopHeader from "@/components/Header";
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Editors from "@/components/editorspick"
import ProductCard from "@/components/productcards"
import GreenPortion from "@/components/greenportion"
import AsianCouple from "@/components/couple"
import Blog from "@/components/blog"
import Footer from "@/components/Footer"


export default function Home() {
  return (

    <div>
<TopHeader/>
<Navbar/>
<Hero/>
<Editors/>
<ProductCard/>
<GreenPortion/>
<AsianCouple/>
<Blog/>
<Footer/>
    </div>
  );
}
