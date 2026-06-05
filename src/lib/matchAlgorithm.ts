export function calculateMatches(
  customer: any,
  profiles: any[]
) {
  return profiles
    .filter((profile) => {
      // Male customer -> only female matches
      if (customer.gender === "Male") {
        return profile.gender === "Female";
      }

      // Female customer -> only male matches
      return profile.gender === "Male";
    })
    .map((profile) => {
      let score = 0;

      if (customer.gender === "Male") {
        // Assignment Logic:
        // younger
        if (profile.age < customer.age)
          score += 25;

        // shorter
        if (
          profile.height <
          customer.height
        )
          score += 20;

        // earn less
        if (
          profile.income <
          customer.income
        )
          score += 20;

        // children preference
        if (
          profile.wantKids ===
          customer.wantKids
        )
          score += 35;
      } else {
        // Female Matching Logic

        // profession compatibility
        if (
          profile.designation ===
          customer.designation
        )
          score += 25;

        // relocation compatibility
        if (
          profile.relocate ===
          customer.relocate
        )
          score += 25;

        // values compatibility
        const commonValues =
          profile.values?.filter(
            (value: string) =>
              customer.values?.includes(
                value
              )
          ) || [];

        score +=
          commonValues.length * 15;

        // pets compatibility
        if (
          profile.pets ===
          customer.pets
        )
          score += 20;

        // age compatibility
        if (
          Math.abs(
            profile.age -
              customer.age
          ) <= 3
        )
          score += 15;
      }

      return {
        ...profile,
        score,
      };
    })
    .sort(
      (a, b) => b.score - a.score
    )
    .slice(0, 10);
}