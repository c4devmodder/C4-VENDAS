// Configuração COMPLETA do Firebase (baseada no seu print)
const firebaseConfig = {
    apiKey: "Aizx86j0p6d6a8f2qb3TEWehYFLJm88-pK4t11So",
    authDomain: "hushclientsite.firebaseapp.com",
    projectId: "hushclientsite",
    storageBucket: "hushclientsite.appspot.com", // Adicionado do ambiente padrão
    messagingSenderId: "13483004348", // Número do projeto
    appId: "1:13483004348:web:Sd7r60aC19a22edf05s19" // Combinando ID + Android
};

// Inicializações
firebase.initializeApp(firebaseConfig);

// Serviços Firebase (todos que aparecem no seu print)
const auth = firebase.auth();
const db = firebase.firestore(); // Firestore Database
const realtimeDb = firebase.database(); // Realtime Database
const storage = firebase.storage(); // Storage (para arquivos)

// Configurações adicionais do seu projeto:
const projectSettings = {
    name: "hushclientsite",
    environment: "Não especificado", // Como no seu print
    packageName: "com.hushclients.online" // Para integração Android
};