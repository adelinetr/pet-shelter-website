import HeroSection from '../HeroSection'
import './DonationHero.css'

export default function DonationHero() {
    return(
        <div>
            <HeroSection
            mobileHeroClass="mobile-donation-hero bg-img"
            heroClass="donation-hero bg-img"
            heading="How Your Donation Helps"
            text="Your support is crucial in helping us provide care, shelter, and hope to animals in need."
            btnClass="hidden"
            />
        </div>
    )
}