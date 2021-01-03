# Awakening-Censorshit

มี3folder

1.censorshit_frontend คือตัว webapp ที่เอาไว้แปลง text เป็น emoji

2.censorshit_backend คือ server ที่เอาไว้รันคิว

3.censorshit_resolume คือหน้าwebที่เอาไว้ขึ้นprojector


โปรแกรมที่ต้องลง

1.nodejs https://nodejs.org/en/

2.VisualStudioCode https://code.visualstudio.com/

3.liveserver (VisualStudioCode extension)
https://youtu.be/pKsvDf-sJQE

ขั้นตอนการเปิดระบบ

1.เปิด terminal เพื่อ รัน server โดยใช้คำสั่ง
node Awakening-Censorshit/censorshit_backend/server.js 
แต่ก็ขึ้นอยู่กับว่า code วางไว้อยู่ที่pathไหน 

2.เปิด folder censorshit_frontend ด้วย VisualStudioCode
รัน liveserver ที่หน้า index.html
หน้า webapp จะเด้งขึ้นมา พร้อม port ที่ได้(สังเกตที่ url หลัง : คือport)
Ex: localhost:3000

3.เปิด folder censorshit_resolume ด้วย VisualStudioCode
รัน liveserver ที่หน้า index.html
หน้า webapp จะเด้งขึ้นมา พร้อม port ที่ได้(สังเกตที่ url หลัง : คือport)
Ex: localhost:3001

4.ถ้าอยากเล่นบนมือถือให้เข้าไปที่ terminal แล้วพิมพ์ ifconfig
จะได้ ip มา ให้นำ ip:port ไปใส่บนช่อง url ใน browser มือถือ
Ex: 192.168.3.123:3000


