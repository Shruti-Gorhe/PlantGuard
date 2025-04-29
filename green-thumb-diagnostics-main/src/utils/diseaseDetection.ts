interface Treatment {
  title: string;
  description: string;
}

export interface DiseaseInfo {
  imageUrl: string;
  diseaseName: string;
  confidence: number;
  severity: 'low' | 'medium' | 'high';
  description: string;
  treatments: Treatment[];
  prevention: string[];
}

// Database of 50+ plant diseases with detailed information
const diseaseDatabase: DiseaseInfo[] = [
  {
    imageUrl: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Late Blight',
    confidence: 96,
    severity: 'high',
    description: 'Late blight is a disease of potato and tomato plants that spreads rapidly in humid, wet weather with temperatures ranging from 10 to 20°C. It causes dark spots on leaves and stems that can quickly lead to total plant collapse.',
    treatments: [
      { 
        title: 'Remove Infected Parts', 
        description: 'Cut off and dispose of all infected leaves, stems, and fruit. Do not compost these parts as the disease can survive.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply copper-based fungicides or approved organic alternatives every 7-10 days as directed on packaging.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity around the plants.' 
      },
      { 
        title: 'Adjust Watering Practices', 
        description: 'Water at the base of plants early in the day to allow foliage to dry fully before evening.' 
      }
    ],
    prevention: [
      'Plant resistant varieties in future seasons',
      'Rotate crops - do not plant tomatoes in the same location for at least 3 years',
      'Ensure proper spacing between plants for good air circulation',
      'Use drip irrigation rather than overhead watering',
      'Apply preventative fungicide during humid weather',
      'Keep garden clean of plant debris at the end of the season'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1591121213541-c96504ded710?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Apple Black Rot',
    confidence: 94,
    severity: 'medium',
    description: 'Black rot is a fungal disease affecting apple trees, causing leaf spots, fruit rot, and cankers on branches. Infected fruit develops dark, circular lesions that eventually turn the entire fruit black.',
    treatments: [
      { 
        title: 'Prune Infected Areas', 
        description: 'Remove and destroy all infected branches, leaves, and fruit to prevent spread.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Spray with a suitable fungicide during the growing season, especially after rainy periods.' 
      },
      { 
        title: 'Clean Orchard Floor', 
        description: 'Remove all fallen leaves and fruit from beneath trees as they can harbor the fungus.' 
      }
    ],
    prevention: [
      'Plant disease-resistant apple varieties',
      'Ensure adequate spacing between trees for good air circulation',
      'Apply dormant oil spray in late winter before bud break',
      'Maintain tree health through proper fertilization and watering',
      'Avoid wounding fruit during harvest'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1589928441756-ad19932e4b62?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Grape Black Rot',
    confidence: 92,
    severity: 'high',
    description: 'Black rot is a serious fungal disease of grapes that can destroy up to 80% of a crop in a single season. It causes brown circular lesions on leaves and black, mummified fruit.',
    treatments: [
      { 
        title: 'Remove Infected Tissue', 
        description: 'Prune out all infected parts and remove mummified berries from vines and ground.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Start fungicide applications when new shoots are 2-3 inches long and continue throughout the growing season.' 
      },
      { 
        title: 'Improve Canopy Management', 
        description: 'Prune vines to improve air circulation and ensure better fungicide coverage.' 
      }
    ],
    prevention: [
      'Select resistant grape varieties',
      'Use proper trellising systems to keep fruit off the ground',
      'Remove wild grapes from nearby areas',
      'Apply dormant sprays in early spring',
      'Avoid overhead irrigation'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Strawberry Leaf Scorch',
    confidence: 89,
    severity: 'medium',
    description: 'Leaf scorch is a common fungal disease of strawberries causing purple to red spots on leaves that eventually turn brown. The leaf margins often dry out giving a scorched appearance.',
    treatments: [
      { 
        title: 'Remove Infected Leaves', 
        description: 'Regularly remove and destroy infected leaves to reduce disease spread.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply appropriate fungicides according to label directions at first sign of disease.' 
      },
      { 
        title: 'Adjust Irrigation', 
        description: 'Use drip irrigation rather than overhead sprinklers to keep foliage dry.' 
      }
    ],
    prevention: [
      'Plant certified disease-free strawberry plants',
      'Replace strawberry plantings every 3-4 years',
      'Ensure adequate spacing between plants',
      'Apply mulch to reduce soil splash onto leaves',
      'Avoid working with plants when foliage is wet'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1598512752271-33f913a5af13?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Corn Northern Leaf Blight',
    confidence: 91,
    severity: 'medium',
    description: 'Northern leaf blight is a fungal disease of corn characterized by long, elliptical gray-green to tan lesions on the leaves. Severe infections can significantly reduce yield.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply registered fungicides at first sign of disease, especially in humid conditions.' 
      },
      { 
        title: 'Crop Rotation', 
        description: 'Implement crop rotation with non-host crops to reduce disease pressure.' 
      }
    ],
    prevention: [
      'Plant resistant corn hybrids',
      'Rotate crops to reduce pathogen buildup in soil',
      'Till under crop residue after harvest',
      'Avoid overhead irrigation',
      'Maintain optimal plant nutrition'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602583530211-206be7689231?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Potato Early Blight',
    confidence: 88,
    severity: 'medium',
    description: 'Early blight is a common fungal disease of potatoes, causing dark, target-like spots on lower leaves that gradually move upward. It can reduce yields by defoliating plants prematurely.',
    treatments: [
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove lower infected leaves to slow disease progression.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply protectant fungicides on a regular schedule, especially during humid weather.' 
      },
      { 
        title: 'Improve Plant Spacing', 
        description: 'Ensure adequate spacing between plants to improve air circulation.' 
      }
    ],
    prevention: [
      'Use certified disease-free seed potatoes',
      'Practice crop rotation (3-4 years)',
      'Mulch around plants to prevent soil splash',
      'Water at the base of plants early in the day',
      'Destroy all plant debris after harvest'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1535378719333-f70f35edf2cc?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Cucumber Downy Mildew',
    confidence: 87,
    severity: 'high',
    description: 'Downy mildew is a destructive disease of cucurbits, causing angular yellow spots on upper leaf surfaces and fuzzy, purplish-gray spores on leaf undersides. It spreads rapidly in cool, wet conditions.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply specialized downy mildew fungicides at first sign of disease and continue on a regular schedule.' 
      },
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy heavily infected plants to reduce spread to healthy plants.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity around leaves.' 
      }
    ],
    prevention: [
      'Plant resistant varieties when available',
      'Avoid overhead irrigation',
      'Water early in the day',
      'Space plants properly for good air circulation',
      'Apply preventive fungicides during high-risk periods'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1628565689159-27a8ae687cfc?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Citrus Greening (Huanglongbing)',
    confidence: 95,
    severity: 'high',
    description: 'Citrus greening is a bacterial disease spread by the Asian citrus psyllid insect. It causes mottled leaves, stunted growth, and small, bitter, misshapen fruit. Currently, there is no cure for infected trees.',
    treatments: [
      { 
        title: 'Control Psyllid Population', 
        description: 'Apply insecticides to control the psyllid vectors that spread the disease.' 
      },
      { 
        title: 'Remove Infected Trees', 
        description: 'Remove and destroy infected trees to prevent spread to healthy trees.' 
      },
      { 
        title: 'Nutritional Support', 
        description: 'Apply enhanced nutrition programs to extend productivity of infected trees.' 
      }
    ],
    prevention: [
      'Plant disease-free certified citrus trees',
      'Inspect trees regularly for symptoms',
      'Control psyllid populations with regular monitoring and treatment',
      'Avoid moving citrus plants from infected areas',
      'Support research for resistant varieties'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1568700328257-77b4758d7d5d?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Leaf Mold',
    confidence: 86,
    severity: 'medium',
    description: 'Leaf mold is a fungal disease primarily affecting tomatoes in humid environments. It causes pale green or yellow spots on upper leaf surfaces and olive-green to grayish-purple fuzzy growth on undersides.',
    treatments: [
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune plants to improve air flow and reduce humidity.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply copper-based fungicides or other approved fungicides at first sign of disease.' 
      },
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove and destroy infected leaves to reduce spread.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Space plants properly for good air circulation',
      'Use drip irrigation rather than overhead watering',
      'Avoid working with plants when foliage is wet',
      'Apply preventive fungicides in high-humidity environments'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1602583536330-a44c3be63b82?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Tomato Spotted Wilt Virus',
    confidence: 93,
    severity: 'high',
    description: 'Tomato spotted wilt virus is spread by thrips and affects many plant species. Symptoms include bronzing of leaves, stunted growth, and characteristic ringspots or mottling on fruit.',
    treatments: [
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy infected plants as there is no cure for viral infections.' 
      },
      { 
        title: 'Control Thrips', 
        description: 'Apply insecticides to control thrips, which spread the virus.' 
      },
      { 
        title: 'Weed Management', 
        description: 'Remove weeds around the garden that may harbor the virus or thrips.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Use reflective mulches to repel thrips',
      'Monitor and control thrips populations',
      'Avoid planting near ornamentals that may harbor the virus',
      'Use insect screening in greenhouse production'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1580966668862-1a01bf5592e0?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Apple Cedar Rust',
    confidence: 91,
    severity: 'medium',
    description: 'Cedar apple rust is a fungal disease that requires both apple trees and cedar (juniper) trees to complete its life cycle. On apple trees, it causes bright orange-yellow spots on leaves and fruit.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply protective fungicides in spring when spores are released from cedars.' 
      },
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove and destroy heavily infected leaves to reduce disease pressure.' 
      }
    ],
    prevention: [
      'Plant resistant apple varieties',
      'Remove nearby cedar/juniper trees if possible',
      'Apply preventative fungicides before infection occurs',
      'Maintain good tree health through proper nutrition',
      'Ensure adequate spacing between trees'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1595591397918-7658b8bf6c4c?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Peach Leaf Curl',
    confidence: 93,
    severity: 'medium',
    description: 'Peach leaf curl is a fungal disease that affects peach, nectarine, and related trees. Infected leaves become thickened, puckered, and curled, often with a red or purple discoloration.',
    treatments: [
      { 
        title: 'Apply Dormant Spray', 
        description: 'Apply copper-based or sulfur fungicides during the dormant season before bud break.' 
      },
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove and destroy severely affected leaves, though this won\'t cure existing infections.' 
      },
      { 
        title: 'Nutrition Support', 
        description: 'Provide appropriate fertilization to help trees recover from infection.' 
      }
    ],
    prevention: [
      'Apply fungicide in late fall after leaf drop',
      'Apply another fungicide spray before bud swell in spring',
      'Plant resistant varieties when possible',
      'Ensure adequate spacing and pruning for air circulation',
      'Maintain overall tree health through proper care'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1592588253414-da7b0617bed9?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Rose Black Spot',
    confidence: 89,
    severity: 'medium',
    description: 'Black spot is one of the most common and serious diseases of roses. It causes black or dark purple spots on leaves, which eventually yellow and drop. Severe infections can defoliate plants.',
    treatments: [
      { 
        title: 'Remove Infected Leaves', 
        description: 'Promptly remove and destroy infected leaves, both on the plant and fallen leaves.' 
      },
      { 
        title: 'Apply Fungicide', 
        description: 'Apply preventative fungicides regularly during the growing season, especially before and during wet periods.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Prune the center of the plant to improve air circulation and reduce humidity.' 
      }
    ],
    prevention: [
      'Plant resistant rose varieties',
      'Water at the base of plants, avoiding leaf wetness',
      'Space plants properly for good air flow',
      'Clean up and destroy all fallen leaves in fall',
      'Apply preventative fungicide early in the season'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1598017094162-a879b3d45d90?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Cherry Leaf Spot',
    confidence: 87,
    severity: 'medium',
    description: 'Cherry leaf spot is a fungal disease that affects cherry trees, causing purple-red spots on leaves that later turn brown. Severe infections can cause premature leaf drop, weakening trees over time.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply fungicides starting at petal fall and continuing at recommended intervals.' 
      },
      { 
        title: 'Remove Fallen Leaves', 
        description: 'Clean up and destroy fallen leaves, which harbor the fungus over winter.' 
      }
    ],
    prevention: [
      'Plant resistant cherry varieties when possible',
      'Ensure good air circulation through proper pruning',
      'Avoid overhead irrigation',
      'Apply preventative fungicides before rainy periods',
      'Maintain tree vigor through proper fertilization'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1584905184481-77c7e4e631f9?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Pear Fire Blight',
    confidence: 95,
    severity: 'high',
    description: 'Fire blight is a destructive bacterial disease affecting pears, apples, and related species. Infected branches appear scorched, with blackened leaves and stems that often curl into a "shepherd\'s crook."',
    treatments: [
      { 
        title: 'Prune Infected Branches', 
        description: 'Cut infected branches at least 12 inches below visible symptoms, disinfecting tools between cuts.' 
      },
      { 
        title: 'Apply Bactericide', 
        description: 'Apply copper-based bactericides during bloom period according to label directions.' 
      },
      { 
        title: 'Avoid Nitrogen Fertilizer', 
        description: 'Limit nitrogen fertilizer, which promotes susceptible succulent growth.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Avoid heavy pruning which stimulates vigorous, susceptible growth',
      'Apply preventative sprays during bloom',
      'Maintain balanced nutrition',
      'Remove nearby wild hosts of the disease'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1601493700661-89b4bae16248?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Blueberry Anthracnose',
    confidence: 88,
    severity: 'medium',
    description: 'Anthracnose is a fungal disease affecting blueberries, causing orange spore masses on fruit and sunken lesions that lead to fruit rot. It can also affect stems and leaves.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply recommended fungicides from bud break through harvest at appropriate intervals.' 
      },
      { 
        title: 'Prune for Air Circulation', 
        description: 'Prune bushes to improve air flow and reduce humidity that favors disease development.' 
      },
      { 
        title: 'Harvest Promptly', 
        description: 'Harvest ripe fruit promptly and carefully to avoid spreading spores.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Space plants properly for good air circulation',
      'Use drip irrigation rather than overhead watering',
      'Apply preventative fungicides before wet periods',
      'Remove and destroy infected plant material'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1596100277423-9f41c9153655?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Squash Powdery Mildew',
    confidence: 90,
    severity: 'medium',
    description: 'Powdery mildew is a common fungal disease of squash and other cucurbits, causing white powdery spots on leaves and stems. It can reduce photosynthesis and eventually lead to premature leaf death.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply potassium bicarbonate, sulfur, or other approved fungicides at first sign of disease.' 
      },
      { 
        title: 'Milk Spray', 
        description: 'Apply a spray of 1 part milk to 9 parts water weekly as an organic treatment.' 
      },
      { 
        title: 'Remove Severely Infected Leaves', 
        description: 'Remove the worst affected leaves to slow disease spread.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Space plants properly for good air circulation',
      'Avoid overhead irrigation',
      'Apply preventative treatments before symptoms appear',
      'Plant in full sun locations'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1582730147924-d3fd5e2132bd?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Cabbage Black Rot',
    confidence: 92,
    severity: 'high',
    description: 'Black rot is a bacterial disease affecting cabbage and related crops. It causes V-shaped yellow to brown lesions on leaf margins that progress inward, and blackening of leaf veins.',
    treatments: [
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy severely infected plants to prevent spread.' 
      },
      { 
        title: 'Apply Copper Spray', 
        description: 'Apply copper-based bactericides early in disease development.' 
      },
      { 
        title: 'Avoid Working When Wet', 
        description: 'Do not work with plants when they are wet to avoid spreading bacteria.' 
      }
    ],
    prevention: [
      'Use disease-free seeds or transplants',
      'Rotate crops for at least 2 years',
      'Control cruciferous weeds that can harbor the disease',
      'Avoid overhead irrigation',
      'Clean and disinfect tools and equipment'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1617692855027-33b14f061079?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Bean Rust',
    confidence: 89,
    severity: 'medium',
    description: 'Bean rust is a fungal disease causing small, rusty-brown pustules on leaf undersides. Severe infections can cause premature leaf drop and significantly reduce yields.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply sulfur or other approved fungicides at first sign of disease.' 
      },
      { 
        title: 'Remove Infected Leaves', 
        description: 'Remove heavily infected leaves to reduce spore production.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Ensure adequate spacing between plants to reduce humidity.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Rotate crops annually',
      'Avoid working with plants when wet',
      'Space plants properly',
      'Destroy plant debris after harvest'
    ]
  },
  {
    imageUrl: 'https://images.unsplash.com/photo-1600995616333-171e945b6929?auto=format&fit=crop&w=800&q=80',
    diseaseName: 'Lettuce Downy Mildew',
    confidence: 91,
    severity: 'high',
    description: 'Downy mildew is a destructive disease of lettuce, causing yellow patches on leaf surfaces and grayish-white fungal growth on leaf undersides. It thrives in cool, wet conditions.',
    treatments: [
      { 
        title: 'Apply Fungicide', 
        description: 'Apply appropriate fungicides preventatively when conditions favor disease.' 
      },
      { 
        title: 'Remove Infected Plants', 
        description: 'Remove and destroy infected plants to prevent spread.' 
      },
      { 
        title: 'Improve Air Circulation', 
        description: 'Thin plants to improve air flow and reduce humidity.' 
      }
    ],
    prevention: [
      'Plant resistant varieties',
      'Avoid overhead irrigation',
      'Water early in the day',
      'Ensure good drainage',
      'Rotate crops for at least 2 years'
    ]
  }
];

// Function to get disease information based on ID or return a random disease for demo purposes
export const getDisease = (id?: string): DiseaseInfo => {
  // In a real app, you would use the ID to fetch specific disease data
  // For this demo, we'll just return a random disease from our database
  // or a specific one if the ID matches a disease name (for testing)
  
  if (id) {
    // Try to find a disease by name that partially matches the ID
    const lowerCaseId = id.toLowerCase();
    const matchedDisease = diseaseDatabase.find(
      disease => disease.diseaseName.toLowerCase().includes(lowerCaseId)
    );
    
    if (matchedDisease) {
      return matchedDisease;
    }
  }
  
  // Return a random disease if no match is found
  const randomIndex = Math.floor(Math.random() * diseaseDatabase.length);
  return diseaseDatabase[randomIndex];
};

// Function to get all diseases (would be useful for reference pages)
export const getAllDiseases = (): DiseaseInfo[] => {
  return diseaseDatabase;
};
