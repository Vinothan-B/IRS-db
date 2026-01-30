# 🏛️ Instant Ration System (IRS)

## ✅ Complete System Overview

This is a **realistic Ration Card Display System** designed for FPS (Fair Price Shop) / Government demonstrations.

---

## 📁 Files Created

1. **index.html** - Main frontend page with government-style layout
2. **script.js** - Database + Display logic
3. **style.css** - Official government styling

---

## 🗄️ Database Details

### Ration Card: **RC1001**

**Card Type:** PHH (Priority Household)  
**Issue Date:** 12-04-2019  
**FPS Code:** FPS-2031  
**District:** Chennai  
**State:** Tamil Nadu

### 👨‍👩‍👧‍👦 Family Members (5 Members)

| Name | Relation | Gender | Age | Aadhaar |
|------|----------|--------|-----|---------|
| Ramesh Kumar | Head | Male | 42 | XXXX-XXXX-1234 |
| Lakshmi Ramesh | Wife | Female | 38 | XXXX-XXXX-5678 |
| Karthik R | Son | Male | 16 | XXXX-XXXX-1122 |
| Anitha R | Daughter | Female | 12 | XXXX-XXXX-3344 |
| Meena Devi | Mother | Female | 65 | XXXX-XXXX-7788 |

### 🏠 Address

12A, Anna Nagar, Chennai, Chennai, Tamil Nadu - 600040

### 🌾 Monthly Entitlement

- **Rice:** 20 Kg
- **Wheat:** 10 Kg
- **Sugar:** 5 Kg
- **Kerosene:** 3 Liters

---

## 🚀 How to Run

### Method 1: Using Live Server (Recommended)

1. Install **Live Server** extension in VS Code
2. Right-click on `index.html`
3. Select **"Open with Live Server"**
4. Access: `http://127.0.0.1:5500/index.html?rc=RC1001`

### Method 2: Direct File Access

1. Open `index.html` directly in browser
2. Add query parameter: `?rc=RC1001`
3. Full path example: `file:///c:/Users/VSR/OneDrive/Desktop/Vinothan/IRS/IRS%20db/index.html?rc=RC1001`

### Method 3: Python HTTP Server

```bash
# Navigate to project folder
cd "c:\Users\VSR\OneDrive\Desktop\Vinothan\IRS\IRS db"

# Start server
python -m http.server 8000

# Access in browser
http://localhost:8000/index.html?rc=RC1001
```

---

## 📱 QR Code Integration

### URL to Encode in QR Code:

```
http://localhost:8000/index.html?rc=RC1001
```

### How It Works:

1. Generate QR code with above URL
2. User scans QR code with phone
3. Browser opens automatically
4. Full ration card details displayed instantly

### QR Code Generators:

- Online: [qr-code-generator.com](https://www.qr-code-generator.com/)
- Command line: `qrencode -o ration_qr.png "http://localhost:8000/index.html?rc=RC1001"`

---

## 🎨 Features

✅ **Realistic Government Format** - Official ration card layout  
✅ **Complete Family Data** - 5 members including elderly dependent  
✅ **Masked Aadhaar** - Security compliant (XXXX-XXXX-####)  
✅ **Professional Styling** - Clean government-style CSS  
✅ **QR Code Ready** - URL parameter based access  
✅ **Responsive Design** - Works on mobile and desktop  

---

## 🔧 Customization

### Adding More Ration Cards

Edit `script.js` and add new entries to `rationDB`:

```javascript
const rationDB = {
  RC1001: { /* existing data */ },
  
  RC1002: {
    cardDetails: {
      type: "AAY",
      issueDate: "15-06-2020",
      fpsCode: "FPS-2032",
      district: "Coimbatore",
      state: "Tamil Nadu"
    },
    // ... add family, address, entitlement
  }
};
```

### Changing Colors

Edit `style.css`:

```css
h1 {
  color: darkgreen; /* Change to your preferred color */
}
```

---

## 📋 Use Cases

- **FPS Demonstrations** - Show ration card verification
- **College Projects** - Government system simulation
- **Training Purposes** - Staff training for PDS systems
- **Prototype Testing** - Test QR-based authentication

---

## 🔒 Security Notes

- Aadhaar numbers are masked for privacy
- This is a **demonstration system** - not for production use
- No backend database - all data is client-side
- For production, implement proper authentication and encryption

---

## 📞 Support

For issues or questions about this system, refer to the code comments in `script.js` and `index.html`.

---

**Status:** ✅ Ready for Demo  
**Last Updated:** January 30, 2026  
**Version:** 1.0
