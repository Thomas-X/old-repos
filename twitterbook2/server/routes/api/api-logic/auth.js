const jwt = require('jsonwebtoken');
const User = require('../../../models/User');
const helpers = require('../api-helpers');

module.exports = {
    postRegister: (req, res) => {
        // eslint-disable-next-line no-useless-escape
        const token = jwt.sign({ secret: 'OÃ*ÙÜÐJ+¢Éêó|9¹¡}_øÆ7Ø¯¿&7mºoMýì$éà0ðåSøöu-ëdDêóú³ë¨&ÔÜºÃÈs¢¶ªÞw4¶/ù¶:$>»4üqu»1²î¶*úa|Ë£ý¡gSÓR¾P³:OP]1Pn°2}ü£ÖÊØÏ¼+}_xùGtÿÁÒû?år²*FL%BJ_¤OÅò¼ùôñ<¼ZÆìl¾©³B×ðþºùöÎ§3Ï{tjdaâêAïâêTôv¾+nèÉ³>h¸x°æÈ§,«+ÝÒJ&xÓð»ÕPÍ$¸Ø]ºÑ£Eêé²ÌÀ³§rÄæzÜxßc&z¥·é-¥±§iy(-¦ëf_»3-ëþef"ÄZ' }, 'Ò¨·Õ¬E\ØK6ìoöUA£²,ïnJÚo,e8¤¯úÁbL·WÉíeªIÄÚ£Qy©q¶l3æfEUËõr;þ·pÓ¬ÈùÜK²SÐPuôÛÌíêÖ¦6yðoîú¾ÁÛ¾t(îbÁ!l^Ò¦(uc}A/h³{`%ÌZÍG#ÔÚWP_Í2¿ÎN,jàq´ïºQµÆeéK)ÜéÀbÈ¶b¿@×l.C£UC`\¹7íùÆkäº·¥%37C,º=¼È-Ø©¬PÛÛÅ6ëÙ¬ÛgCm£×¯ôÂÌå_@äÉµõÒ7rQ{ËfZùVÌÂÙAô÷*¿Ìª;>¢ËúS£9×5è(íÐÒå¹EÈ1¬qÈë1C1ìú¦ÛV', { algorithm: 'HS512' });

        User.create({
            username: req.body.username,
            password: req.body.password,
            name: req.body.username,
            token: token,
        }, (err, user) => {
            if (!err) {
                res.json(user);
            } else {
                helpers.errorHandler(err, res);
            }
        });
    },
    postLogin: (req, res) => {
        res.json(req.user);
    },
    postIsLoggedIn: (req, res) => {
        User.find({ token: req.body.token }, (err, user) => {
            if (!err && user && user.length > 0) {
                res.jsonp({isLoggedIn: true});
            } else {
                res.jsonp({isLoggedIn: false});
            }
        });
    },
};