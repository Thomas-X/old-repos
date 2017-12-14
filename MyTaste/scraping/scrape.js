import axios from 'axios';
import 'babel-polyfill';
import cheerio from 'cheerio';
import { Allerhande } from './selectors/allerhande/index';

const TOTAL_ITEMS_IN_DB = 5;

axios.get('https://www.ah.nl/allerhande/recepten-zoeken?Ntt=*&Dy=33&Nrpp=' + TOTAL_ITEMS_IN_DB)
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const urls = [];
        $('div.infinite-container')
            .children()
            .each((i, elem) => {
                let link = $(elem)
                    .find('figure')
                    .find('a')
                    .attr('href');
                link = `https://www.ah.nl${link}`;
                urls.push(link);
            });
        Allerhande.getAllDishes(urls)
            .then(dish => console.log(dish))
            .catch(err => console.log(err));

        // const getAllDishData = (i) => {
        //     if (arr[i]) {
        //         axios.get(arr[i])
        //             .then(response => {
        //                 const html = response.data;
        //                 const $ = cheerio.load(html);
        //
        //                 const headerInner = $('.header-inner');
        //
        //                 const title = $(headerInner)
        //                     .find('h1')
        //                     .text()
        //                     .replace(/­/g, '') || '';
        //                 const description = $(headerInner)
        //                     .find('h2')
        //                     .text()
        //                     .replace(/­/g, '') || '';
        //                 console.log(`
        //
        //                 ==== title
        //                 ${JSON.stringify(title)}
        //
        //
        //                 ==== desc
        //                 ${JSON.stringify(description)}
        //
        //                 `);
        //
        //                 i += 1;
        //                 getAllDishData(i);
        //             })
        //             .catch(err => console.log(err));
        //     }
        // };
        // getAllDishData(0);

    })
    .catch(err => console.log(err));