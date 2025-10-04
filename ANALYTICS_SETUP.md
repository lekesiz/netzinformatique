# Analytics & Tracking Setup Guide

## Google Analytics 4 (GA4)

### 1. Create GA4 Property
1. Go to [Google Analytics](https://analytics.google.com/)
2. Create a new GA4 property for netzinformatique.fr
3. Get your Measurement ID (format: G-XXXXXXXXXX)

### 2. Configure Environment Variable
Add to Vercel environment variables:
```
VITE_GA4_MEASUREMENT_ID=G-XXXXXXXXXX
```

### 3. Verify Installation
- Check Google Analytics Real-Time reports
- Test events in GA4 DebugView

## Tracked Events

### Automatic Events
- **Page Views**: Tracked on every route change
- **Scroll Depth**: Automatic with GA4
- **Outbound Clicks**: Automatic with enhanced measurement

### Custom Events

#### Form Submissions
```javascript
import { trackFormSubmit } from '@/utils/analytics';
trackFormSubmit('contact_form');
```

#### Button Clicks
```javascript
import { trackButtonClick } from '@/utils/analytics';
trackButtonClick('cta_button', 'homepage');
```

#### Service Views
```javascript
import { trackServiceView } from '@/utils/analytics';
trackServiceView('IA Offline');
```

#### Calendly Opens
```javascript
import { trackCalendlyOpen } from '@/utils/analytics';
trackCalendlyOpen();
```

#### Newsletter Signups
```javascript
import { trackNewsletterSignup } from '@/utils/analytics';
trackNewsletterSignup(email);
```

#### Outbound Links
```javascript
import { trackOutboundLink } from '@/utils/analytics';
trackOutboundLink('https://informatique-haguenau.fr', 'Boutique');
```

## Additional Tracking Tools (Optional)

### Microsoft Clarity
Free heatmaps and session recordings
1. Sign up at [clarity.microsoft.com](https://clarity.microsoft.com/)
2. Get Project ID
3. Add to `index.html`:
```html
<script type="text/javascript">
  (function(c,l,a,r,i,t,y){
    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
  })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
</script>
```

### Hotjar
User behavior analytics
1. Sign up at [hotjar.com](https://www.hotjar.com/)
2. Get Site ID
3. Add tracking code to `index.html`

### Facebook Pixel (Meta Pixel)
For Facebook/Instagram ads
1. Create pixel in Facebook Business Manager
2. Add Pixel ID to environment variables
3. Implement pixel tracking

## Privacy & GDPR Compliance

### Cookie Consent
- ✅ Cookie banner already implemented
- User consent required before tracking
- Anonymize IP addresses in GA4

### Privacy Policy
- ✅ Privacy policy page exists at `/politique-confidentialite`
- Update with analytics tools information
- Mention data collection and usage

## Performance Monitoring

### Vercel Analytics
Already included with Vercel deployment
- Automatic performance monitoring
- Real User Monitoring (RUM)
- Web Vitals tracking

## Recommended GA4 Custom Reports

1. **Service Performance**
   - Service page views
   - Time on service pages
   - CTA click rates

2. **Lead Generation**
   - Form submissions
   - Calendly opens
   - Newsletter signups

3. **User Journey**
   - Entry pages
   - Exit pages
   - Conversion funnels

4. **E-commerce (Future)**
   - Product views
   - Add to cart
   - Purchases

## Testing

### Development
Analytics disabled in development mode (import.meta.env.DEV)

### Staging/Production
1. Use GA4 DebugView
2. Check Real-Time reports
3. Verify event parameters

## Support

For issues or questions:
- Google Analytics Help: https://support.google.com/analytics
- GA4 Documentation: https://developers.google.com/analytics/devguides/collection/ga4
