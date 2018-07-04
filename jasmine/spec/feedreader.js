/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against this application.
 */

/* All of these tests are placed within the $() function,
 * since some of these tests may require DOM elements. It needs
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This suite 'RSS Feeds' is all about the RSS
    * feeds definitions, the allFeeds variable in this application.
    */
    describe('RSS Feeds', function() {
        /* This test tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. 
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                let feed = allFeeds[i];
                expect(feed.url).toBeDefined();
                expect(feed.url).not.toBe(0);
                expect(feed.url.length).not.toBe(0);
            }    
        });
        /* This test loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
                let feed = allFeeds[i];
                expect(feed.name).toBeDefined();
                expect(feed.name).not.toBe(0);
                expect(feed.name.length).toBeGreaterThan(0);
            }    
        });
    });
    /* Test suite named "The menu" */
    describe('The menu', function() {
        const body = $('body');
        const menu = $('a.menu-icon-link');
        let bodyHasClass = body.hasClass('menu-hidden'); 
        
        /* This test ensures the menu element is
         * hidden by default. 
         */
        it('menu element is hidden by default', function() {
            expect(bodyHasClass).toBe(true);
        }); 

         /* This test ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
                
        it('menu changes visibility', function() {
           
            if (menu.click()) {
                body.removeClass('menu-hidden');
                bodyHasClass = body.hasClass('menu-hidden'); 
                // console.log(bodyHasClass);
            }
           
            menu.click();
            expect(bodyHasClass).toBe(false);
            
            if (menu.click()) {
                body.addClass('menu-hidden');
                bodyHasClass = body.hasClass('menu-hidden'); 
                //console.log(bodyHasClass);
           }

            menu.click();
            expect(bodyHasClass).toBe(true);
                                
        });
    });      

    /* Test suite named "Initial Entries" */

        
    describe('Initial Entries', function() {
    	
    	beforeEach(function(done) {
			for (let i = 0; i < allFeeds.length; i++) {
			    loadFeed(i, done);
            }
		});	
        /* This test ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * LoadFeed() is asynchronous so this test require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */    
	
	    it('loadFeed function test', function(done) {
	    	let content = $('.feed a.entry-link article.entry').html();
       		//console.log(content);
            expect(content).not.toBe('');
            done();
        });
    });     
    
    /* Test suite named "New Feed Selection" */

	describe('New Feed Selection', function() {
 		
  		beforeEach(function(done) {
 			loadFeed(0, done);
         	loadFeed(1, done);
        });
		
        /* This test ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
        */
		it('content actually changes', function(done) {
			
			let firstArticleContent = $('.feed a.entry-link:nth-child(1) article.entry').html();
			//console.log(firstArticleContent);
			let secondArticleContent = $('.feed a.entry-link:nth-child(2) article.entry').html();
			//console.log(secondArticleContent);
            expect(firstArticleContent).not.toBe(secondArticleContent);
            done();
        });

 	});

}());
