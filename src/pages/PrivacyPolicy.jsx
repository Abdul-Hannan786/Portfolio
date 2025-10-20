import React from "react";

const PrivacyPolicy = () => {
  return (
    <section className="relative min-h-screen dark flex items-center">
    <div className="container h-full mx-auto p-6 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-gilroy mb-4">🔒 Privacy Policy</h1>
      <p className="mb-2 font-gilroy">
        Welcome to our digital space! 🚀 Your privacy matters, and we’re here to
        keep things transparent. No hidden tricks—just clear and simple privacy
        terms.  
      </p>

      <h2 className="text-xl font-gilroy mt-4">📌 1. What We Collect</h2>
      <p className="font-gilroy">
        We respect your privacy—our apps **do not collect personal data**. Any
        settings or preferences are stored **locally on your device**.  
      </p>

      <h2 className="text-xl font-gilroy mt-4">🔔 2. Notifications</h2>
     <p className="font-gilroy">
        Some apps may request **notification permissions** to send reminders or
        updates. You can enable or disable them anytime in your **device
        settings**.  
      </p>

      <h2 className="text-xl font-gilroy mt-4">🛡️ 3. Security</h2>
     <p className="font-gilroy">
        We take necessary precautions to **keep your data safe**, but remember,
        no system is 100% foolproof. Stay mindful of your **privacy settings**.  
      </p>

      <h2 className="text-xl font-gilroy mt-4">📜 4. Policy Updates</h2>
     <p className="font-gilroy">
        This policy may be updated from time to time. Changes will be reflected
        here, so feel free to **check back anytime**.  
      </p>

      <h2 className="text-xl font-gilroy mt-4">📬 5. Contact</h2>
     <p className="font-gilroy">
        Have questions? We’re here to help! Reach out at:{" "}
        <a href="mailto:konainraza105@gmail.com" className="text-blue-500">
          konainraza105@gmail.com
        </a>  
      </p>
    </div>
    </section>
  );
};

export default PrivacyPolicy;
