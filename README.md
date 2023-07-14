# resturant-app
This a resturant app which can be used by user for booking tables and ordering available foods from digital menu.

#architecture of this app is can be divided in two parts first is frontend and second is backend .
And I have set it up so that frontend will access the database by making various requests to the backend .

#setUp
clone this repo and then open it with vs code / other code editors
1.move to frotend part and download node modules , by entering the command :
cd ./frontend
npm i

2.then move to backend folder and again download node modules
cd ./backend
npm i

3.After that open two terminal , and move to frontend in one terminal and backend in other terminal by following same command as above and then 
write this command in first backend terminal and then in frontend terminal: 
npm start 
and hit enter after that you can see the web application in you browser.
If you can't see the website then in frontend part type o .

#Uses
On the homepage user can click on get started and then if they have previously booked a table then they can enter the refrence number and book orders for themselves
and if not then they can book a table by entering the required fields asking details about the reservation of table.

Once the user books a table then they will be redirected to the menu page where they can order various dishes and thus use this app easily.
