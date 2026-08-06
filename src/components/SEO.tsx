import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/context/LanguageContext';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords, 
  image = '/logo.png', // Fallback to logo if no specific OG image is provided
  url = 'https://excal-group.com', 
  type = 'website' 
}: SEOProps) {
  const { language } = useLanguage();
  
  // Default fallbacks based on language
  const defaultTitle = language === 'ru' 
    ? 'Excal Group — ИТ Консалтинг и Аутсорсинг' 
    : language === 'ro' 
      ? 'Excal Group — Consultanță IT & Externalizare' 
      : 'Excal Group — IT Consulting & Outsourcing';
      
  const defaultDesc = language === 'ru'
    ? 'Excal Group предлагает ИТ-консалтинг, разработку программного обеспечения, веб-порталы, хостинг, управление инфраструктурой и аутсорсинг персонала.'
    : language === 'ro'
      ? 'Excal Group oferă consultanță IT, dezvoltare software, portaluri web, hosting, management de infrastructură și servicii de externalizare a personalului.'
      : 'Excal Group offers IT consulting, custom software development, web portals, hosting, infrastructure management, call center and staffing services.';

  const defaultKeywords = language === 'ru'
    ? 'ИТ консалтинг, разработка по, аутсорсинг персонала, хостинг, кибербезопасность'
    : language === 'ro'
      ? 'consultanță IT, dezvoltare software, externalizare personal, hosting, securitate cibernetică'
      : 'IT consulting, software development, staff outsourcing, hosting, cybersecurity';

  const siteTitle = title ? `${title} | Excal Group` : defaultTitle;
  const siteDesc = description || defaultDesc;
  const siteKeywords = keywords || defaultKeywords;
  const siteUrl = url; // In a real app, this might use window.location.href

  return (
    <Helmet htmlAttributes={{ lang: language }}>
      {/* Standard SEO */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDesc} />
      <meta name="keywords" content={siteKeywords} />
      <link rel="canonical" href={siteUrl} />

      {/* OpenGraph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDesc} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Excal Group" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDesc} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
