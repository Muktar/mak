# Shohoz Train Seat Selector

## Install
1. Chrome-এ `chrome://extensions` খুলুন।
2. **Developer mode** চালু করুন।
3. **Load unpacked** চাপুন এবং এই folder নির্বাচন করুন।
4. `https://train.shohoz.com/` খুলে স্বাভাবিকভাবে search করুন।
5. Seat numbers লিখে Auto-select চালু রাখুন।

## কীভাবে কাজ করে
Seat layout modal-এ Shohoz-এর `title` ও `ticketid` attributes দেখে configured seat number খুঁজে click করে। Seat unavailable/disabled হলে click করে না।

## সীমাবদ্ধতা
Login, Cloudflare CAPTCHA, payment, passenger information বা booking submission bypass/automation করা হয় না। Website UI/API পরিবর্তন হলে selector আপডেট লাগতে পারে।
