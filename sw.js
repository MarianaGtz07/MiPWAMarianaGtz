self.addEventListener('fetch', event => {

    if(event.request.url.includes('sytle.min.css')){
        event.respondWith(null );
    }else{
        event.respondWith( fetch( event.request ) );
    }
});
