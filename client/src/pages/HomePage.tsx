import codecollab from "@/assets/codecollab.png"
import Features from "@/components/Features/Features"
import FormComponent from "@/components/forms/FormComponent"
import HeroSection from "@/components/Hero/Hero"
import Testimonials from "@/components/Testimonials/Testimonials"
import Footer from "@/components/common/Footer"
import Navbar from "@/components/Navbar/Navbar"
function HomePage() {
    return (
        <div className="flex min-h-screen flex-col bg-black text-white">
            {/* Hero Section */}
            <Navbar/>
            <HeroSection />
            
            
            {/* Main Content */}
            <div className="flex flex-1 flex-col items-center justify-center gap-16 bg-black">
                <div className="my-12 flex h-full min-w-full flex-col items-center justify-evenly sm:flex-row sm:pt-0 relative">
                    {/* Background Grid Pattern */}
                    <div className="absolute inset-0 top-0 -z-10 h-full w-full bg-transparent bg-[linear-gradient(to_right,#57534e_1px,transparent_1px),linear-gradient(to_bottom,#57534e_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20"></div>
                    
                    {/* Background Gradient */}
                    <div className="absolute left-1/2 top-0 -z-20 -translate-x-1/2 w-full h-full bg-gradient-to-b from-purple-900/20 via-blue-900/10 to-transparent"></div>
                    
                    <div className="flex w-full animate-up-down justify-center sm:w-1/2 sm:pl-4">
                        <img
                            src={codecollab}
                            alt="Code Sync Illustration"
                            className="mx-auto w-[250px] sm:w-[500px]"
                        />
                    </div>
                    <div className="flex w-full items-center justify-center sm:w-1/2">
                        <FormComponent />
                    </div>
                </div>
                <Features/>
                <Testimonials/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage