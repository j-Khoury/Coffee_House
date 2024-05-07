import Config from "react-native-config";
export const login = async (email, password) => {
  try {
    const response = await fetch(`${Config.BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({email, password}),
    });

    if (!response.ok) {
      throw new Error('Invalid username or password');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Failed to login');
  }
};
export const signUp = async (email, password, confirmPassword) => {
  try {
    if(password === confirmPassword){

      const response = await fetch(`${Config.BASE_URL}/signup`, { 
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email, password}),
      });
      
      if (!response.ok) {
        throw new Error('Invalid username or password');
      }
      
      const data = await response.json();
      return data;
    }
  } catch (error) {
    throw new Error('Failed to login');
  }
};
