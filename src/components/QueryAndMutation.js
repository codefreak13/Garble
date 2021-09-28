import {gql} from 'apollo-boost';

export const MOBILE_TOILET_QUOTE = gql`
  query MOBILE_TOILET_QUOTE {
    getMobileToiletQuotes {
      serviceAddress
      subscriptionType
      selectedStartDate
      single_economy_class
      double_economy_class
      single_vip_class
      double_vip_class
      subtotal
      single_economy_service_duration
      double_economy_service_duration
      single_vip_service_duration
      double_vip_service_duration
      single_economy_class_value
      double_economy_class_value
      single_vip_class_value
      double_vip_class_value
      userId
      userPhone
      userEmail
    }
  }
`;
export const EVACUATION_QUOTE = gql`
  query EVACUATION_QUOTE {
    getEvacuationQuote {
      userAddress
      subscriptionType
      amount
      serviceAddress
      serviceStartDate
      userId
      userPhone
      userEmail
    }
  }
`;

export const WASTE_COLLECTION_QUOTES = gql`
  query WASTE_COLLECTION_QUOTES {
    getHouseQuote {
      subscriptionType
      amount
      serviceAddress
      userId
      userName
      email
      phone
      userAddress
      city
      state
    }
    getOfficeQuote {
      subscriptionType
      amount
      serviceAddress
      userId
      userName
      email
      phone
      userAddress
      city
      state
    }
    getIndustrialQuote {
      subscriptionType
      amount
      serviceAddress
      userId
      userName
      email
      phone
      userAddress
      city
      state
    }
    getMedicalQuote {
      subscriptionType
      amount
      serviceAddress
      userId
      userName
      email
      phone
      userAddress
      city
      state
    }
  }
`;
export const FUMIGATION_QUOTES = gql`
  query FUMIGATION_QUOTES {
    getfumigQuotes {
      serviceAddress
      house_type
      land_plot
      fumigation_type
      selectedStartDate
      subtotal
      isChecked_inter_bedBug
      isChecked_inter_mosquito
      isChecked_inter_termite
      isChecked_inter_rats
      isChecked_exter_mosquito
      isChecked_exter_termite
      isChecked_exter_rats
      isChecked_exter_snakes
    }
  }
`;
export const CLEANING_QUOTES = gql`
  query CLEANING_QUOTES {
    getQuotes {
      serviceAddress
      standard_bedroom
      standard_bathroom
      post_standard_bedroom
      post_standard_bathroom
      Upholstery_qty
      marble_rooms
      tank_size
      tank_qty
      standard_size
      large_size
      largest_size
      lawn_plots
      bush_plots
      selectedStartDate
      subtotal
    }
  }
`;
export const CleanQuote = gql`
  mutation(
    $serviceAddress:String,
    $standard_bedroom: Int
    $standard_bathroom: Int
    $post_standard_bedroom: Int
    $post_standard_bathroom: Int
    $Upholstery_qty: Int
    $marble_rooms: Int
    $tank_size: Int
    $tank_qty: Int
    $standard_size: Int
    $large_size: Int
    $largest_size: Int
    $lawn_plots: Int
    $bush_plots: Int
    $selectedStartDate: String
    $subtotal: Int
  ) {
    cleaningQuote(
      data: {
        standard_bedroom: $standard_bedroom
        standard_bathroom: $standard_bathroom
        post_standard_bedroom: $post_standard_bedroom
        post_standard_bathroom: $post_standard_bathroom
        Upholstery_qty: $Upholstery_qty
        marble_rooms: $marble_rooms
        tank_size: $tank_size
        tank_qty: $tank_qty
        standard_size: $standard_size
        large_size: $large_size
        largest_size: $largest_size
        lawn_plots: $lawn_plots
        bush_plots: $bush_plots
        selectedStartDate: $selectedStartDate
        subtotal: $subtotal
        serviceAddress:$serviceAddress
      }
    )
  }
`;

export const FUMIGATION_QUOTE = gql`
  mutation(
    $serviceAddress:String,
    $house_type: Int
    $land_plot: Int
    $fumigation_type: Int
    $isChecked_inter_bedBug: Int
    $isChecked_inter_mosquito: Int
    $isChecked_inter_termite: Int
    $isChecked_inter_rats: Int
    $isChecked_exter_mosquito: Int
    $isChecked_exter_termite: Int
    $isChecked_exter_rats: Int
    $isChecked_exter_snakes: Int
    $selectedStartDate: String
    $subtotal: Int
  ) {
    fumigationQuote(
      data: {
        house_type: $house_type
        land_plot: $land_plot
        fumigation_type: $fumigation_type
        isChecked_inter_bedBug: $isChecked_inter_bedBug
        isChecked_inter_mosquito: $isChecked_inter_mosquito
        isChecked_inter_termite: $isChecked_inter_termite
        isChecked_inter_rats: $isChecked_inter_rats
        isChecked_exter_mosquito: $isChecked_exter_mosquito
        isChecked_exter_termite: $isChecked_exter_termite
        isChecked_exter_rats: $isChecked_exter_rats
        isChecked_exter_snakes: $isChecked_exter_snakes
        selectedStartDate: $selectedStartDate
        subtotal: $subtotal
        serviceAddress:$serviceAddress
      }
    )
  }
`;

export const CURRENT_USER = gql`
  query {
    getCurrentUser {
      id
      firstname
      surname
      email
      phone
      address
      city
      state
    }
  }
`;

export const MOBILE_TOILET = gql`
  mutation(
    $serviceAddress:String,
    $subscriptionType: String
    $selectedStartDate: String
    $single_economy_class: Int
    $double_economy_class: Int
    $single_vip_class: Int
    $double_vip_class: Int
    $subtotal: Int
    $single_economy_service_duration: Int
    $double_economy_service_duration: Int
    $single_vip_service_duration: Int
    $double_vip_service_duration: Int
    $single_economy_class_value: Int
    $double_economy_class_value: Int
    $single_vip_class_value: Int
    $double_vip_class_value: Int
  ) {
    CreateMobileToiletQuote(
      data: {
        subscriptionType: $subscriptionType
        selectedStartDate: $selectedStartDate
        single_economy_class: $single_economy_class
        double_economy_class: $double_economy_class
        single_vip_class: $single_vip_class
        double_vip_class: $double_vip_class
        subtotal: $subtotal
        single_economy_service_duration: $single_economy_service_duration
        double_economy_service_duration: $double_economy_service_duration
        single_vip_service_duration: $single_vip_service_duration
        double_vip_service_duration: $double_vip_service_duration
        single_economy_class_value: $single_economy_class_value
        double_economy_class_value: $double_economy_class_value
        single_vip_class_value: $single_vip_class_value
        double_vip_class_value: $double_vip_class_value
        serviceAddress:$serviceAddress
      }
    )
  }
`;

export const SEWAGE_EVACUATION = gql`
  mutation(
    $subscriptionType: String
    $amount: Int
    $serviceAddress: String
    $serviceStartDate: String
  ) {
    CreateEvacuationQuote(
      data: {
        subscriptionType: $subscriptionType
        amount: $amount
        serviceAddress: $serviceAddress
        serviceStartDate: $serviceStartDate
      }
    )
  }
`;

export const HOUSE_WASTE = gql`
  mutation($subscriptionType: String, $amount: Int, $serviceAddress: String ) {
    createHouseQuote(
      data: {
        subscriptionType: $subscriptionType
        amount: $amount
        serviceAddress: $serviceAddress
      }
    )
  }
`;

export const INDUSTRIAL_WASTE = gql`
  mutation($subscriptionType: String, $amount: Int, $serviceAddress: String) {
    createIndustrialQuote(
      data: {
        subscriptionType: $subscriptionType
        amount: $amount
        serviceAddress: $serviceAddress
      }
    )
  }
`;

export const OFFICE_WASTE = gql`
  mutation($subscriptionType: String, $amount: Int, $serviceAddress: String) {
    createOfficeQuote(
      data: {
        subscriptionType: $subscriptionType
        amount: $amount
        serviceAddress: $serviceAddress
      }
    )
  }
`;

export const MEDICAL_WASTE = gql`
  mutation($subscriptionType: String, $amount: Int, $serviceAddress: String) {
    createMedicalQuote(
      data: {
        subscriptionType: $subscriptionType
        amount: $amount
        serviceAddress: $serviceAddress
      }
    )
  }
`;

export const RECYCLER = gql`
  mutation addMember(
    $name: String
    $surname: String
    $email: String
    $phone: String
    $address: String
    $city: String
    $state: String
  ) {
    addRdecycleMember(
      data: {
        name: $name
        surname: $surname
        email: $email
        phone: $phone
        address: $address
        city: $city
        state: $state
      }
    )
  }
`;

export const VERIFIED_MEMBER = gql`
  query verifid {
    getverifiedMember {
      isVerified
      name
      surname
      email
    }
    getCurrentUser {
      id
      firstname
      surname
      email
      phone
      address
      city
      state
    }
  }
`;

export const GET_RECYCLE_MEMBER = gql`
  query {
    getRecycleMember {
      _id
      isVerified
      name
      surname
      email
      phone
      address
      city
      state
      isVerified
    }
    getCurrentUser {
      id
      firstname
      surname
      email
      phone
      address
      city
      state
    }
  }
`;

export const CANCEL_REGISTRATION = gql`
  mutation($id: ID) {
    deleteRdecycleMember(id: $id)
  }
`;

export const FORGOT_PASSWORD = gql`
  mutation($email: String) {
    forgotPassword(email: $email)
  }
`;


export const RESEND_OTP = gql`
  mutation($email: String) {
    resendOTP(email: $email)
  }
`;

export const RESET_PASSWORD = gql`
  mutation(
      $code:String, 
      $newPassword: String, 
      $confirmPassword: String) {
    resetPassword(
      data: {
        code:$code 
        newPassword: $newPassword 
        confirmPassword: $confirmPassword
      }
      )
  }
`;
