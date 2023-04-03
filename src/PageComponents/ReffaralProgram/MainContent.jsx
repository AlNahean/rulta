import React from "react";
import { AiFillMessage } from "react-icons/ai";
const MainContent = () => {
  return (
    <div className=" pt-[var(--header-height)] px-8 ">
      <div className=" grid grid-cols-2 mt-10">
        <div className=" col-span-2 md:col-span-1 flex flex-col justify-center items-center px-4">
          <h1 className=" text-5xl font-bold text-center">
            Invite Friends & You Both Get Up To $1000
          </h1>
          <h3 className=" text-2xl font-semibold">
            Introduce your friends to the best way to protect content
          </h3>
          <div className=" bg-emerald-700 py-3 my-6 w-full text-center rounded-2xl font-semibold text-xl text-white ">
            Sign Up
          </div>
        </div>
        <div className="  col-span-2 md:col-span-1">
          <img
            src="https://rulta-images.s3.amazonaws.com/ian-schneider-PAykYb-8Er8-unsplash_dclo5w_c_scale,w_1400.jpg"
            alt=""
            className=" rounded-lg"
          />
        </div>
      </div>
      <div className=" bg-zinc-800 text-white py-10 px-6 rounded-lg my-12">
        <h1 className=" text-5xl">Three Easy Steps</h1>
        <div className=" grid grid-cols-3">
          <div className=" col-span-3 md:col-span-1 flex flex-col items-center justify-center my-12 gap-6 ">
            <div className=" text-6xl">
              <AiFillMessage />
            </div>
            <p className=" text-2xl text-center">
              Spread the word by email or with your link via social sharing
            </p>
          </div>
          <div className=" col-span-3 md:col-span-1 flex flex-col items-center justify-center my-12 gap-6">
            <div className=" text-6xl">
              <AiFillMessage />
            </div>
            <p className=" text-2xl text-center">
              Spread the word by email or with your link via social sharing
            </p>
          </div>
          <div className=" col-span-3 md:col-span-1 flex flex-col items-center justify-center my-12 gap-6">
            <div className=" text-6xl">
              <AiFillMessage />
            </div>
            <p className=" text-2xl text-center">
              Spread the word by email or with your link via social sharing
            </p>
          </div>
        </div>
      </div>

      <div className=" bg-zinc-800 p-6 text-white my-5">
        Read Terms Referral Program Terms & Conditions How to Refer Your Friends
        You can now introduce your friends to Rulta, get them a special discount
        for their first purchase and earn shopping credit while you're at it! By
        clicking on the COPY button above, you can refer friends to Rulta
        through your email contacts or your contacts on social networks. We call
        “Referral” any of your friends who joins Rulta following your
        introduction of Rulta to the friend through this referral system. We
        call “Referrer” to the user who refers friends using the referral
        system. The referral system allows you to share the referral with your
        connections via an email message, or post the referral on Twitter,
        Facebook, Google plus LinkedIn and personal blogs. You agree to use the
        referral system only with personal friends and not publish a referral,
        or cause it to be published or distributed, on or via methods, platforms
        and media where you have no reasonable basis for believing that all or
        most of the readers or recipients are your personal friends (such as
        coupon websites, Reddit, Wikipedia). Each contact you add to the
        referral system will receive an email notifying them that you referred
        us to them, inviting them to visit Rulta.com. You are required to obtain
        consents from your Referrals prior to referring them. Eligible Users -
        Limited Time Only This referral program is open to registered Rulta
        users only, for a limited time, and we may withdraw or suspend this
        referral program (in whole or in part) at any time. The requirements and
        incentives are also subject to change at any time. Earning, Receiving
        and Redeeming Shopping Credits First, any one of your Referrals will get
        a 20% discount* for their first purchase on Rulta (capped at US$1000).
        In addition, for each Qualifying Purchase made by your Referrals, you,
        as the Referrer, will receive Rulta Credits in the amount of US$5 or 20%
        of the Qualifying Purchase amount, whichever is higher (capped at
        US$1000 Rulta Credits per Qualifying Purchase). In total, you can earn
        up to US$500 Rulta Credits. See our general Terms of Services to learn
        more about Rulta Credits. * Such discount may not be used or combined
        with any other promotion. For orders that are comprised of one or more
        milestones, the discount will apply to the first milestone only.
        Qualifying Purchase A Qualifying Purchase means a successfully delivered
        and completed Gig(s) purchased by the Referral. A Qualifying Purchase
        must be made with an external payment method (i.e. not with the
        Referral's shopping balance). Referrals Referred by Multiple Users If
        your Referral was also referred by another user, you will earn shopping
        credits only if the Referral registers based on your referral link. If
        your Referral uses another user's referral link from which they signed
        up, you will not receive the shopping balance credit. If You've Been
        Invited to Rulta Via a Referral If you complete a Qualifying Purchase
        your Referrer will receive the shopping credit to his/her Rulta account
        and we will notify your Referrer that he/she earned this credit due to
        your purchases. However, we will not share with the Referrer details
        about your purchases. Important Disclaimers We reserve the right to
        suspend your account and remove referrals shopping credit entitlement
        should we notice any activity we determine contrary to the Referral
        Program terms and conditions or the Rulta Terms of Service by the
        Referrer and/or Referral. We retain the right to investigate the
        participation in the Referral Program for any fraudulent activities and
        take any measures to end them. We reserve the right to amend or suspend
        this Referral Program at any time without notice.
      </div>
    </div>
  );
};

export default MainContent;
