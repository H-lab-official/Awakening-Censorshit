# Awakening-Censorshit

มี3folder

censorshit_frontend คือตัว webapp ที่เอาไว้แปลง text เป็น emoji
censorshit_backend คือ server ที่เอาไว้รันคิว
censorshit_resolume คือหน้าwebที่เอาไว้ขึ้นprojector

โปรแกรมที่ต้องลง

1.nodejs https://nodejs.org/en/
2.VisualStudioCode https://code.visualstudio.com/
3.liveserver (VisualStudioCode extension)
https://youtu.be/pKsvDf-sJQE

ขั้นตอนการเปิดระบบ

1.เปิด terminal เพื่อ รัน server รันq
node Awakening-Censorshit/censorshit_backend/server.js
*ขึ้นอยู่กับว่า code วางไว้อยู่ที่ไหน*

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


