// basic example of cookie
document.cookie = "username=kevin;expires=Thu, 30 Jan 2026 12:00:00 UTC; path=/"
console.log(document.cookie);


// to update cookie value use the same way as to create it
document.cookie = "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
console.log(document.cookie);


// to delete a cookie don't give the cookie value and set the expires parameter to past
document.cookie = "username=; expires=Thu, 01 Jan 2000 00:00:00 UTC; path=/;";
