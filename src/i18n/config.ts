import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      welcome: "Welcome",
      login: "Login",
      register: "Register",
      logout: "Logout",
      home: "Home",
      store: "Store",
      cart: "Cart",
      search: "Search...",
      categories: "Categories",
      featured_products: "Featured Products",
      add_to_cart: "Add to Cart",
      checkout: "Checkout",
      email: "Email",
      password: "Password",
      name: "Full Name",
      username: "Username",
      no_account: "Don't have an account?",
      have_account: "Already have an account?",
      greeting: "Hello, {{name}}! Welcome to the best gamer store.",
      enter_store: "Enter Store",
      total: "Total",
      items: "Items",
      empty_cart: "Your cart is empty",
      buy_now: "Buy Now",
    }
  },
  ar: {
    translation: {
      welcome: "أهلاً بك",
      login: "تسجيل الدخول",
      register: "إنشاء حساب",
      logout: "تسجيل الخروج",
      home: "الرئيسية",
      store: "المتجر",
      cart: "السلة",
      search: "بحث...",
      categories: "الأقسام",
      featured_products: "منتجات مميزة",
      add_to_cart: "أضف إلى السلة",
      checkout: "الدفع",
      email: "البريد الإلكتروني",
      password: "كلمة المرور",
      name: "الاسم الكامل",
      username: "اسم المستخدم",
      no_account: "ليس لديك حساب؟",
      have_account: "لديك حساب بالفعل؟",
      greeting: "أهلاً {{name}}! مرحبًا بك في أفضل متجر للاعبين.",
      enter_store: "دخول المتجر",
      total: "الإجمالي",
      items: "العناصر",
      empty_cart: "سلة التسوق فارغة",
      buy_now: "اشترِ الآن",
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ['localStorage', 'cookie', 'htmlTag'],
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;
