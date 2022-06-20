# react-11-formik-customHook-authIntro

1. install react router @^5 `npm i react-router-dom@^5`
2. / HomePage
3. /about AboutPage

# CAO

1. sukurti forma panasia i https://codeacademy.online/dashboard/modules/js1/Lv8eqyizQ3LvSmYUPfiI/YMhrSBEAACIAcZqO
2. paziureti kaip veikia formik [dokumentacija](https://formik.org/docs/tutorial), [video](https://youtu.be/vJtyp1YmOpc)
3. pasidaryti formos valdyma su formik.
4. Atvaizduoti klaida po kievienu inputu
5. tiek paspaudus submit, tiek pereinant nuo input prie input (onBlur)
6. Logiskos validacijos:
   6.1 kaina : skaicius, teigiamas, iki 1000000, privalomas
   6.2 img: valid url, privalomas
   6.3 description: string, min 10,
   6.4 city: vienas is galimu varijantu
7. Prideti isLoading state i useResource hook ir panaudoti About ir HomePage
