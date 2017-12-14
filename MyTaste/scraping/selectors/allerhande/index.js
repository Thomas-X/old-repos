import axios from 'axios';

export const Allerhande = {
    // TODO return dish in object form.
    getDish: async (url) => {
        const html = await axios.get(url);
        if (html) {
            return html;
        } else {
            return {};
        }
    },
    getAllDishes: async (urls) => {
        for (const url of urls) {
            const dish = await Allerhande.getDish(url);
            console.log();
        }
    },
};