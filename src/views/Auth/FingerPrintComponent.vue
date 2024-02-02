<template>
    <Button @click="authenticateWithFingerprint" icon="fas fa-fingerprint" :pt="{ 
        icon: { class: 'text-lg' } 
    }" class="" />
</template>

<script setup>
import { FingerprintAIO } from '@awesome-cordova-plugins/fingerprint-aio';

async function authenticateWithFingerprint() {
  try {
    // Check if fingerprint is available
    const isAvailable = await FingerprintAIO.isAvailable();
    
    if (isAvailable === 'OK') {
      // Authenticate user using fingerprint
      const result = await FingerprintAIO.show({
        title: 'Fingerprint Authentication',
        subtitle: 'Please authenticate to continue',
        description: 'Place your finger on the sensor',
        fallbackButtonTitle: 'Use Passcode',
        disableBackup: true, // Disable fallback to pin/passcode
      });

      if (result === 'Success') {
        // Fingerprint authentication successful
        // Call your Laravel API here for authentication
        // Use a library like Axios to make API requests
        // Example: await axios.post('your-api-endpoint', { fingerprintData });
      } else {
        // Fingerprint authentication failed
        console.log('Authentication failed');
      }
    } else {
      // Fingerprint not available on this device
      console.log('Fingerprint not available');
    }
  } catch (error) {
    console.error('Error during fingerprint authentication:', error);
  }
}

</script>