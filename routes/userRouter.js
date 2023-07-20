const express = require( 'express' );
const router = express.Router();
const { signUp, signIn, signOut, verifyEmail, resendVerificationEmail, resetPassword, forgotPassword } = require( '../controllers/userController' );

router.route( "/users/sign-up" )
    .post( signUp )

router.route( "/users/verify-email/:token" )
    .get( verifyEmail );

router.route( "/users/resend-verification-email" )
    .post( resendVerificationEmail );
    
router.route( "/users/sign-in" )
    .post( signIn )
    
router.route( "/users/sign-out" )
    .post(signOut)
    
router.route('/users/reset-password/:token')
.post(resetPassword);

router.route('/users/forgot-password')
.post(forgotPassword);




module.exports = router;