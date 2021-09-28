import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  Image,
  ScrollView
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Root from "./Utils/Root";

export default class Profile extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    return {
      title: "Terms and Conditions",
      headerStyle: {
        backgroundColor: "#0b8647"
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontSize: 18,
        flex: 1
      },
      headerLeft: (
        <TouchableNativeFeedback
          onPress={() => navigation.goBack()}
          background={TouchableNativeFeedback.Ripple("#0b8647")}
        >
          <View
            style={{
              margin: 20,
              width: 35,
              height: 35,
              borderRadius: 35,
              backgroundColor: "white",
              padding: 7
            }}
          >
            <FontAwesome
              name="arrow-left"
              color="#0b8647"
              size={20}
              style={{ width: 20 }}
            />
          </View>
        </TouchableNativeFeedback>
      ),

      headerRight: (
        <TouchableNativeFeedback onPress={() => navigation.goBack()}>
          <View
            style={{
              paddingRight: 20.8
            }}
          >
            <Image
              source={require("../assets/terms.png")}
              style={{
                tintColor: "white",
                width: 22,
                height: 22
              }}
            />
          </View>
        </TouchableNativeFeedback>
      )
    };
  };

  render() {
    return (
      <Root navigation={this.props.navigation}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps={"handled"}
        >
          <View style={styles.main}>
            <Text style={{ fontSize: 16, color: "grey", paddingBottom: 25 }}>
              Please read carefully before using this service.
            </Text>
            <Text
              style={{
                color: "#0b8647",
                fontSize: 32,
                alignSelf: "center",
                fontWeight: "bold",
                paddingBottom: 10
              }}
            >
              Welcome to Garble!
            </Text>
            <Text style={styles.serviceText}>
              The Garble service, website and/or software application
              (collectively, the “Service”) affords you access to waste
              management services and also provides you an opportunity to earn
              therein. The Service is operated by Garble Nigeria Limited
              (“Garble”), subject to these Terms of Service (“Terms”).
            </Text>
            <Text
              style={{
                color: "#0b8647",
                fontSize: 20,
                fontWeight: "bold",
                paddingTop: 15
              }}
            >
              Terms of Service
            </Text>
            <Text style={styles.subHeader}>1. This is a contract.</Text>
            <Text style={styles.serviceText}>
              These Terms constitute a contract between you and Garble. You may
              not use the Service if you do not accept these Terms. By using any
              part of the Service you accept these Terms. If you are under
              eighteen (18) years of age, you may not use the Service.
            </Text>
            <Text style={styles.subHeader}>
              2. You must register an account with valid information.
            </Text>
            <Text style={styles.serviceText}>
              To use the Service, you must: (a) provide a valid mobile phone
              number; (b) agree to the creation of an account associated with
              such number; (c) accept the present Terms; and (d) submit such
              other and additional information as Garble may request. You agree
              to provide true, accurate and complete information about yourself
              as prompted by Garble during the account registration process. You
              will be given the option of receiving a unique PIN for purposes of
              reusing your account. You are responsible for keeping your PIN
              secure.
            </Text>
            <Text style={styles.subHeader}>
              3. Payments are processed by third parties.
            </Text>
            <Text style={styles.serviceText}>
              In order to facilitate your purchases, Garble has integrated its
              Service with the billing solutions of certain mobile money
              providers and credit card issuing banks (“Payment Processors”). If
              you purchase a Product using your supported mobile money wallet or
              account or credit card, payments will be processed by such Payment
              Processors. Payment Processors have their own terms and conditions
              governing your use of their payment services. You understand and
              agree that Garble does not process payments and is not responsible
              or liable for any transactions in which you engage. By engaging in
              a purchase transaction using your mobile money account or credit
              card, you authorize the Merchant (or Garble on its behalf) to bill
              your account or card for the purchase amount.
            </Text>
            <Text style={styles.subHeader}>
              4. Your privacy is important to us.
            </Text>
            <Text style={styles.serviceText}>
              Garble takes the matters of protection and security of its users’
              information very seriously. Garble’s privacy policy governing the
              Service is attached to these Terms (“Privacy Policy”). The Privacy
              Policy is incorporated into these Terms by this reference. By
              using the Service, you agree to the use of your data in accordance
              with Garble’s Privacy Policy. The Privacy Policy addresses only
              the information collected by Garble in providing the Service to
              you. Merchants and Payment Processors have their own information
              gathering practices that will apply when you choose to purchase
              Products.
            </Text>
            <Text style={styles.subHeader}>
              5. Product inquiries should be submitted to our support lines.
            </Text>
            <Text style={styles.serviceText}>
              If you have any questions, concerns or requests related to a
              Product you have purchased from a Garble, you should contact us at
              support@Garble.team. If you wish to submit a complaint about a
              Service, you may contact us by email support@Garble.team
            </Text>
            <Text style={styles.subHeader}>
              6. You must not use the Service to violate any laws.
            </Text>
            <Text style={styles.serviceText}>
              You must not use the Service to violate or infringe the rights of
              any other person, including the rights of other users, Garble’s
              rights in the Service or Merchants’ rights in their Products. You
              must not breach any laws or regulations when using the Service or
              attempt to disrupt or interfere with the security or functionality
              of the Service. In the event Garble has the suspicion you are
              using the Services for illegal activities such as fraud, Garble
              will block your account immediately.
            </Text>
            <Text style={styles.subHeader}>
              7. Garble may contact you regarding your account or the Service.
            </Text>
            <Text style={styles.serviceText}>
              You expressly agree that, as part of the Service, you may, from
              time to time, receive communications from Garble via email,
              instant message, telephone, text message (SMS) or other means. You
              may stop receiving promotional messages by emailing your request
              to opt-out, along with your cell phone number, to
              support@Garble.team, or following the opt-out instructions in the
              message. Even if you choose to opt out of receiving promotional
              messages, you may not opt out of receiving service-related
              messages.
            </Text>
            <Text style={styles.subHeader}>
              8. Garble may discontinue the Service.
            </Text>
            <Text style={styles.serviceText}>
              Garble may in its sole discretion and at any time terminate your
              access to the Service or discontinue providing the Service or any
              part of the Service, with or without notice. You agree that Garble
              will not be responsible or liable to you or any third party for
              modifying or discontinuing the Service, or for terminating or
              suspending your access to the Service.
            </Text>
            <Text style={styles.subHeader}>
              9. The Service is provided without any warranties or guarantees.
            </Text>
            <Text style={styles.serviceText}>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND.
              Garble AND ITS SUPPLIERS AND AFFILIATES DISCLAIM ALL WARRANTIES
              WITH REGARD TO THE SERVICE, INCLUDING ALL IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND
              NON-INFRINGEMENT. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE
              SERVICE, OR WITH ANY OF THESE TERMS, YOUR SOLE AND EXCLUSIVE
              REMEDY IS TO DISCONTINUE USING THE SERVICE.
            </Text>
            <Text style={styles.subHeader}>
              10. Garble is not liable for any damages you may incur as a result
              of using the Services.
            </Text>
            <Text style={styles.serviceText}>
              IN NO EVENT SHALL Garble OR ITS SUPPLIERS BE LIABLE FOR ANY
              DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL
              DAMAGES, OR ANY DAMAGES WHATSOEVER ARISING OUT OF OR IN ANY WAY
              CONNECTED WITH THE USE OR PERFORMANCE OF THE SERVICE, WITH THE
              DELAY OR INABILITY TO USE THE SERVICE, THE PROVISION OF OR FAILURE
              TO PROVIDE SERVICES, OR OTHERWISE ARISING OUT OF THE USE OF THE
              SERVICE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT
              LIABILITY, OR OTHERWISE, EVEN IF Garble OR ANY OF ITS SUPPLIERS
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </Text>
            <Text style={styles.subHeader}>
              11. You agree to arbitrate any disputes.
            </Text>
            <Text style={styles.serviceText}>
              This Agreement is subject to, and shall be governed by, and
              construed in accordance with the laws of Nigeria, without
              reference to the principles of conflict of laws thereof. Any
              matters arising concerning the interpretation, validity or
              implementation of this Agreement not solved by mutual agreement
              between the Parties shall be submitted to arbitration in the
              English language before a sole arbitrator to take place in Lagos,
              Nigeria as the seat of the arbitration. The arbitration shall be
              conducted pursuant to the Rules of Arbitration of the Chartered
              Institute of Arbitrators of the United Kingdom. The arbitral
              decision shall be final and binding on the Parties and may be made
              an order of court. The Parties unconditionally consent and submit
              to the jurisdiction of the High Court of Lagos, Nigeria for such
              purpose. Nothing in this Agreement will be deemed as preventing
              Garble from seeking injunctive relief (or any other provisional
              remedy) from any court having jurisdiction over the Parties and
              the subject matter of the dispute as is necessary to protect
              Garble’s name, proprietary information, trade secrets, know-how,
              or any other intellectual property rights.
            </Text>
            <Text style={styles.subHeader}>
              12. Garble may modify these Terms.
            </Text>
            <Text style={styles.serviceText}>
              These Terms and related policies (including but not limited to the
              Privacy Policy) may be modified by Garble without notice at any
              time in the future. Changes will be posted. By using the Service,
              you agree to be bound by the latest version of these Terms. It is
              your responsibility to remain informed of any changes.
            </Text>
            <Text style={styles.subHeader}>13. Alteration.</Text>
            <Text style={styles.serviceText}>
              No alteration, variation or agreed cancellation of this agreement,
              and this paragraph, shall be of any effect unless directed so by
              us.
            </Text>
            <Text style={styles.subHeader}>14. Whole Agreement.</Text>
            <Text style={styles.serviceText}>
              This Agreement constitutes the whole agreement between the parties
              in regard to the subject matter hereof and no warranties or
              representations of any nature whatsoever other than set out in
              this agreement have been given by any of the parties.
            </Text>
            <Text style={styles.subHeader}>15. Waiver/Relaxation.</Text>
            <Text style={styles.serviceText}>
              No relaxation or indulgence which Garble may show to you shall in
              any way prejudice or be deemed to be a waiver of its rights
              hereunder.
            </Text>
            <Text style={styles.subHeader}>16. Survival.</Text>
            <Text style={styles.serviceText}>
              Each and every provision of this Agreement (excluding only those
              provisions which are essential at law for a valid and binding
              Agreement to be constituted) shall be deemed to be separate and
              severable from the remaining provisions of this Agreement. If any
              of the provisions of this Agreement (excluding only those
              provisions which are essential at law for a valid and binding
              Agreement to be constituted) is found by any court of competent
              jurisdiction to be invalid and/or unenforceable then,
              notwithstanding such invalidity and/or unenforceability, the
              remaining provisions of this Agreement shall be and remain of full
              force and effect.
            </Text>
            <Text style={styles.subHeader}>Privacy policy</Text>
            <Text style={styles.privacy}>
              A. Garble collects the following data exclusively to be able to
              provide the Service: name, surname, email address, mobile phone
              number, as provided by you. Garble might also collect your mobile
              phone number directly from your device if possible. Garble uses
              the data to deliver the Service and maintain a customer
              relationship, including processing refund claims.
            </Text>
            <Text style={styles.privacy}>
              B. Garble uses Google Analytics to collect statistics on users’
              interaction with the Service to improve the Service and related
              in-app functionality.
            </Text>
            <Text style={styles.privacy}>
              C. The Service may create aggregate usage reports for advertisers
              and partners. This allows our advertisers to advertise more
              effectively and allows our users to receive advertisements that
              are relevant to their needs. Garble never shares individual
              personal information with anyone, so an advertiser will never know
              that a specific user clicked on that advertiser’s advertisement.
            </Text>
            <Text style={styles.privacy}>
              D. Garble uses the above-described information to tailor the
              Service to suit user needs and help our advertisers better
              understand our audience demographics. We do not share information
              about individual users with any third party.
            </Text>
            <Text style={styles.privacy}>
              E. Garble reserves the right to disclose any information we have
              as required by law and when we believe that disclosure is
              necessary to protect our rights and/or comply with a judicial
              proceeding, court order, or legal process.
            </Text>
            <Text style={styles.privacy}>
              F. Garble will inform of any changes or updates to this Privacy
              Policy, through its website or in-app notifications. To learn more
              about the measures implemented by Garble to protect your personal
              information, or if you have any inquiries on the processing of
              your data, you may contact us at privacy@Garble.team.
            </Text>
            <Text style={styles.privacy}>
              G. By using any part of the Service, you acknowledge and agree to
              the processing of your personal data, under the terms and
              conditions set out in this Privacy Policy.
            </Text>
            <View>
              <Text style={{ color: "#0b8647", alignSelf: "center" }}>
                © Garble Services Limited
              </Text>
            </View>
          </View>
        </ScrollView>
      </Root>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: "column",
    marginTop: 5,
    padding: 10
  },
  serviceText: {
    fontSize: 16,
    color: "grey"
  },
  privacy: {
    fontSize: 16,
    color: "grey",
    paddingBottom: 5
  },
  subHeader: {
    color: "#0b8647",
    fontSize: 16,
    paddingBottom: 10,
    paddingTop: 10
  }
});
