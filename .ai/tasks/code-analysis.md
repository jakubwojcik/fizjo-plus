Analyze the repository code and find issues, concerns, security risks and strenghts.
Propose immediate critical actions.

---

🔴 Critical Issues

1. Console.log in production: /src/utils/formValidators.ts and /src/sw.js
2. Stub email validation: checkIfEmailIsValid is a placeholder
3. Exposed API key: VITE_GOOGLE_MAPS_API_KEY in commented code
4. Unused dependency: @vis.gl/react-google-maps (adds ~1MB to bundle)

🟡 Performance Concerns

- No lazy loading for service images
- Missing React.memo/useMemo optimization
- Using JPG instead of WebP formats
- No image loading="lazy" attributes

🔒 Security Gaps

- Missing security headers (CSP, X-Frame-Options)
- No input sanitization in forms
- Some external links missing rel="noopener noreferrer"

✅ Strengths

- Clean TypeScript implementation
- Well-organized component structure
- Proper i18n setup
- Good accessibility in carousel
- Consistent code patterns

Immediate Actions:

1. Remove console.logs
2. Implement real email validation
3. Remove unused Google Maps dependency
4. Add image lazy loading
