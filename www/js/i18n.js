/*
*
* (C) obook 2020-2024
*
* from https://dev.to/adrai/the-progressive-guide-to-jquery-internationalization-i18n-using-i18next-3dc3
*
*/
const lngs = {
    en: { nativeName: 'English' },
    fr: { nativeName: 'French' },
    de: { nativeName: 'German' },
    hi: { nativeName: 'Hindi' },
  };
  
const rerender = () => {
    $('body').localize();
    $('title').text($.t('head.title'))
    $('meta[name=description]').attr('content', $.t('head.description'))
  }

$(function () {
    i18next
      .use(i18nextBrowserLanguageDetector)
      .init({
        debug: false,
        fallbackLng: 'en',
        resources: {
          en: {
            translation: {
                head: {
                    description:'Moodle MCQ GIFT/XML Maker tool',
                    title: 'MCQ-Moodle',
                },
              index: {
                    settings: 'Settings',
                    category: 'Category',
                    outcode: 'Code',
                    type1: 'One correct awswer',
                    type2: 'Two correct awswer',
                    type3: 'Three correct awswer',
                    type4: 'Four correct awswer',
                    withnegativepoints : 'With negative points',
                    withoutnegativepoints:'Without negative points',
                    close: 'Close',
                    question: 'Question',
                    samples : 'Samples',
                    reset: 'Reset',
                    editor: 'Editor',
                    preview: 'Preview',
                    answers: 'Answers',
                    answer1 : 'Answer a',
                    answer2 : 'Answer b',
                    answer3 : 'Answer c',
                    answer4 : 'Answer d',
                    feedback:'Global feedback (optionnal)',
                    questiononly: 'Question only:',
                    copy: 'COPY',
                    save: 'EXPORT',
              }
            }
          },
          fr: {
            translation: {
                head: {
                    description:'Outil de fabrication de QCM pour Moodle',
                    title: 'QCM-Moodle',
                },
                index: {
                    settings: 'Réglages',
                    category: 'Catégorie',
                    outcode: 'Sortie',
                    type1: 'Une question correcte',
                    type2: 'Deux questions correctes',
                    type3: 'Trois questions correctes',
                    type4: 'Quatre questions correctes',
                    withnegativepoints : 'Avec points négatifs',
                    withoutnegativepoints:'Sans points négatifs',
                    close: 'Fermer',
                    question: 'Question',
                    samples : 'Exemples',
                    reset: 'RAZ',
                    editor: 'Éditeur',
                    preview: 'Aperçu',
                    answers: 'Réponses',
                    answer1 : 'Réponse a',
                    answer2 : 'Réponse b',
                    answer3 : 'Réponse c',
                    answer4 : 'Réponse d',
                    feedback: 'Retour global (optionnel)',
                    questiononly: 'Question uniquement:',
                    copy: 'COPIER',
                    save: 'EXPORTER',
              }
            }
          },
          de: {
            translation: {
                head: {
                    description:'Moodle MCQ GIFT/XML Maker tool',
                    title: 'MCQ for Moodle',
                },
              index: {
                    settings: 'Einstellungen',
                    category: 'Kategorie',
                    outcode: 'Code',
                    type1: 'Eine richtige Antwort',
                    type2: 'Zwei richtige Antworten',
                    type3: 'Drei richtige Antworten',
                    type4: 'Vier richtige Antworten',
                    withnegativepoints : 'Mit negativen Punkten',
                    withoutnegativepoints:'Ohne negative Punkte',
                    close: 'Schließen',
                    question: 'Frage',
                    samples : 'Proben',
                    reset: 'Zurücksetzen',
                    editor: 'Herausgeber',
                    preview: 'Vorschau',
                    answers: 'Antworten',
                    answer1 : 'Antwort a',
                    answer2 : 'Antwort b',
                    answer3 : 'Antwort c',
                    answer4 : 'Antwort d',
                    feedback:'Global Rückmeldung (optionnal)',
                    questiononly: 'Nur Frage:',
                    copy: 'KOPIEREN',
                    save: 'EXPORT',
              }
            }
          },
          hi: {
            translation: {
                head: {
                    description:'मूडल एमसीक्यू गिफ्ट/एक्सएमएल मेकर टूल',
                    title: 'MCQ for Moodle',
                },
              index: {
                    settings: 'सेटिंग्स',
                    category: 'श्रेणी',
                    outcode: 'कोड',
                    type1: 'एक सही उत्तर',
                    type2: 'दो सही उत्तर',
                    type3: 'तीन सही उत्तर',
                    type4: 'चार सही उत्तर',
                    withnegativepoints : 'नकारात्मक बिंदुओं के साथ',
                    withoutnegativepoints: 'नकारात्मक बिंदुओं के बिना',
                    close: 'बंद करें',
                    question: 'प्रश्न',
                    samples : 'नमूने',
                    reset: 'रीसेट',
                    editor: 'संपादक',
                    preview: 'पूर्वावलोकन',
                    answers: 'उत्तर',
                    answer1 : 'उत्तर a',
                    answer2 : 'उत्तर b',
                    answer3 : 'उत्तर c',
                    answer4 : 'उत्तर d',
                    feedback:'वैश्विक प्रतिक्रिया (वैकल्पिक)',
                    questiononly: 'केवल प्रश्न:',
                    copy: 'कॉपी',
                    save: 'सहेजें',
              }
            }
          },
        }
      }, (err, t) => {
        if (err)
            return console.error(err);
        jqueryI18next.init(i18next, $, { useOptionsAttr: true });
        rerender();
      });
  });