import './styles/main.scss';

// Functions
const getEl = (id) => document.getElementById(id);

// Images
import logoDark from './assets/logos/logo-dark.svg';
import arrowIcon from './assets/arrow-icon.svg';
import heroImage from './assets/hero-image.png';
import heroCtaBtn from './assets/cta-button.svg';
import germanAwardImg from './assets/award-logos/german-design-award.svg';
import aDesignAwardImg from './assets/award-logos/a-design-award.svg';
import ifDesignAwardImg from './assets/award-logos/if-design-award.svg';
import goodDesignAwardImg from './assets/award-logos/good-design-award.svg';
import aboutUsCreative from './assets/about-creative.png';
import awardBadgeSvg from './assets/award-badge.svg';
import interiorDesignSvg from './assets/service-icons/interior-design.svg';
import buildingSvg from './assets/service-icons/building-renovation.svg';
import constructionSvg from './assets/service-icons/construction.svg';
import workOneImg from './assets/works/work-1.png';
import workTwoImg from './assets/works/work-2.png';
import workThreeImg from './assets/works/work-3.png';
import instagramSvg from './assets/social-icons/instagram.svg';
import facebookSvg from './assets/social-icons/facebook.svg';
import youtubeSvg from './assets/social-icons/youtube.svg';
import twitterSvg from './assets/social-icons/twitter.svg';

// Set Images
getEl('navbarLogoImg').src = logoDark;
getEl('arrowIconSm').src = arrowIcon;
getEl('arrowIconLg').src = arrowIcon;
getEl('heroImg').src = heroImage;
getEl('heroCta').src = heroCtaBtn;
getEl('germanAward').src = germanAwardImg;
getEl('aDesignAward').src = aDesignAwardImg;
getEl('ifDesignAward').src = ifDesignAwardImg;
getEl('goodDesignAward').src = goodDesignAwardImg;
getEl('aboutUsImg').src = aboutUsCreative;
getEl('awardUsBadge').src = awardBadgeSvg;
getEl('interiorDesignImg').src = interiorDesignSvg;
getEl('buildingImg').src = buildingSvg;
getEl('constructionImg').src = constructionSvg;
getEl('workOne').src = workOneImg;
getEl('workTwo').src = workTwoImg;
getEl('workThree').src = workThreeImg;
getEl('instagramIcon').src = instagramSvg;
getEl('facebookIcon').src = facebookSvg;
getEl('youtubeIcon').src = youtubeSvg;
getEl('twitterIcon').src = twitterSvg;