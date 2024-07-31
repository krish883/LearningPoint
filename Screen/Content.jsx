import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Linking, Image } from 'react-native'
import React, { useState } from 'react'

import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
const Content = ({ route }) => {

  const { selectedCourse } = route.params;

  const navigation = useNavigation();

  const [expanded, setExpanded] = useState({});


  const contentData = {

    HTML: [
      {
        id: 5,
        heading: 'HTML Tutorial',
        subheadings: [
          { title: 'HTML - Introduction', url: 'https://www.tutorialspoint.com/html/html_overview.htm' },
          { title: 'HTML - Attributes', url: 'https://www.tutorialspoint.com/html/html_attributes.htm' },
          { title: 'HTML - Formatting', url: 'https://www.tutorialspoint.com/html/html_formatting.htm' },
        ],
      },
      {
        id: 7,
        heading: 'HTML Tables',
        subheadings: [{ title: 'HTML - Tables', url: 'https://www.tutorialspoint.com/html/html_tables.htm' },
        { title: 'HTML - Table Styling', url: 'https://www.tutorialspoint.com/html/html_table_styling.htm' },
        { title: 'HTML - Nested Tables', url: 'https://www.tutorialspoint.com/html/html_nested_tables.htm' },],
      },

      {
        id: 6,
        heading: 'HTML Forms',
        subheadings: [
          { title: 'HTML - Form Attributes', url: 'https://www.tutorialspoint.com/html/html_form_attributes.htm' },
          { title: 'HTML - Form Controls', url: 'https://www.tutorialspoint.com/html/html_form_controls.htm' },
          { title: 'HTML - Form Input Attributes', url: 'https://www.tutorialspoint.com/html/html_input_attributes.htm' },
        ],
      },


      {
        id: 9,
        heading: 'HTML Layout',
        subheadings: [{ title: 'HTML - Layout Elements', url: 'https://www.tutorialspoint.com/html/html_layout_elements.htm' },
        { title: 'HTML - Responsiveness', url: 'https://www.tutorialspoint.com/html/html_responsiveness.htm' },
        { title: 'HTML - Layout using CSS', url: 'https://www.tutorialspoint.com/html/html_layout_using_css.htm' },],
      },


      {
        id: 12,
        heading: 'HTML Miscellaneous',
        subheadings: [
          { title: 'HTML - MathML', url: 'https://www.tutorialspoint.com/html/html_mathml.htm' },
          { title: 'HTML - IndexedDB', url: 'https://www.tutorialspoint.com/html/html_indexeddb.htm' },
          { title: 'HTML - Web Messaging', url: 'https://www.tutorialspoint.com/html/html_web_messaging.htm' },
        ],
      },
    ],
    CSS: [
      {
        id: 25, heading: 'CSS Tutorial', subheadings: [
          { title: 'CSS  - Introduction', url: 'https://www.tutorialspoint.com/css/index.htm' },
          { title: 'CSS - Dimension', url: 'https://www.tutorialspoint.com/css/css_dimension.htm' },
          { title: 'CSS - opacity Property', url: 'https://www.tutorialspoint.com/css/css_opacity.htm' },
        ]
      },
      {
        id: 26, heading: 'CSS Layout', subheadings: [
          { title: 'CSS - Grid Layout', url: 'https://www.tutorialspoint.com/css/css_grid_layout.htm' },
          { title: 'CSS - Layers', url: 'https://www.tutorialspoint.com/css/css_layers.htm' },
          { title: 'CSS - Validations', url: 'https://www.tutorialspoint.com/css/css_validations.htm' },

        ]
      },
      {
        id: 27, heading: 'CSS Advanced', subheadings: [
          { title: 'CSS - Gradients', url: 'https://www.tutorialspoint.com/css/css_gradients.htm' },
          { title: 'CSS - transition Property', url: 'https://www.tutorialspoint.com/css/css_transition.htm' },
          { title: 'CSS - Value Functions', url: 'https://www.tutorialspoint.com/css/css_value-functions.htm' },
        ]
      },
      {
        id: 28, heading: 'CSS Responsiveness', subheadings: [
          { title: 'CSS RWD Introduction', url: 'https://www.tutorialspoint.com/css/css_rwd-introduction.htm' },
          { title: 'CSS RWD Viewport', url: 'https://www.tutorialspoint.com/css/css_rwd-viewport.htm' },
          { title: 'CSS RWD Frameworks', url: 'https://www.tutorialspoint.com/css/css_rwd-frameworks.htm' },
        ]
      },
    ],


    Bootstrap: [
      {
        id: 38, heading: 'Bootstrap Tutorial', subheadings: [
          { title: 'Bootstrap - Introduction', url: 'https://www.tutorialspoint.com/bootstrap/index.htm' },
          { title: 'Bootstrap - RTL', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_rtl.htm' },
          { title: 'Bootstrap - CSS variables', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_css_variables.htm' },
        ]
      },
      {
        id: 39, heading: 'Bootstrap Layout', subheadings: [
          { title: 'Bootstrap - Breakpoint', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_breakpoints.htm' },
          { title: 'Bootstrap - Containers', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_containers.htm' },
          { title: 'Bootstrap - Utilities', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_utilities.htm' },
        ]
      },


      {
        id: 35, heading: 'Bootstrap Form', subheadings: [
          { title: 'Bootstrap - Form Controls', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_form_control.htm' },
          { title: 'Bootstrap - Range', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_form_range.htm' },
          { title: 'Bootstrap - Floating Labels', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_floating_labels.htm' },
        ]
      },

      {
        id: 37, heading: 'Bootstrap Utilities', subheadings: [
          { title: 'Bootstrap - Display', url: 'https://www.tutorialspoint.com/html/html_overview.htm' },
          { title: 'Bootstrap - Interactions', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_interactions.htm' },
          { title: 'Bootstrap - Position', url: 'https://www.tutorialspoint.com/bootstrap/bootstrap_utility_position.htm' },
        ]
      },
    ],
    ES6: [
      {
        id: 41, heading: 'ES6 Tutorial', subheadings: [
          { title: 'ES6 - Introduction', url: 'https://www.tutorialspoint.com/es6/index.htm' },
          { title: 'ES6 - Cookies', url: 'https://www.tutorialspoint.com/es6/es6_cookies.htm' },
          { title: 'ES6 - Objects', url: 'https://www.tutorialspoint.com/es6/es6_objects.htm' },
        ]
      },
      {
        id: 42, heading: 'ES6 - API', subheadings: [
          { title: 'ES6 - Reflect API', url: 'https://www.tutorialspoint.com/es6/es6_reflect_api.htm' },
          { title: 'ES6 - Proxy API', url: 'https://www.tutorialspoint.com/es6/es6_proxy_api.htm' },
        ]
      },
      {
        id: 43, heading: 'ES8 - Iterator', subheadings: [{ title: 'Iterator', url: 'https://www.tutorialspoint.com/es6/es6_iterator.htm' },
        { title: 'ES6 - Classes', url: 'https://www.tutorialspoint.com/es6/es6_classes.htm' },
        { title: 'ES6 - Object Extensions', url: 'https://www.tutorialspoint.com/es6/es6_object_extensions.htm' },]
      },
      {
        id: 44, heading: 'ES8 - New Feature', subheadings: [{ title: 'Exponentiation Operator', url: 'https://www.tutorialspoint.com/es6/es7_newfeatures.htm' },
        { title: 'Padding a String', url: 'https://www.tutorialspoint.com/es6/es8_newfeatures.htm' },
        { title: 'Asynchronous Generators and Iteration', url: 'https://www.tutorialspoint.com/es6/es9_newfeatures.htm' },]
      },


    ],
    ReactJs: [
      {
        id: 51, heading: 'ReactJs Tutorial', subheadings: [{ title: 'ReactJS - Introduction', url: 'https://www.tutorialspoint.com/reactjs/index.htm' },
        { title: 'ReactJS - Component', url: 'https://www.tutorialspoint.com/reactjs/reactjs_components.htm' },
        { title: 'ReactJS - State Management API', url: 'https://www.tutorialspoint.com/reactjs/reactjs_state_management_api.htm' },]
      },
      {
        id: 52, heading: 'ReactJs Hooks', subheadings: [{ title: 'ReactJS - Introduction to Hooks', url: 'https://www.tutorialspoint.com/reactjs/reactjs_introduction_hooks.htm' },
        { title: 'HTML - Attributes', url: 'https://www.tutorialspoint.com/html/html_attributes.htm' },
        { title: 'HTML - Formatting', url: 'https://www.tutorialspoint.com/html/html_formatting.htm' },]
      },
      {
        id: 53, heading: 'ReactJs Advanced', subheadings: [{ title: 'HTML - Introduction', url: 'https://www.tutorialspoint.com/html/html_overview.htm' },
        { title: 'ReactJS - Using useEffect', url: 'https://www.tutorialspoint.com/reactjs/reactjs_using_useeffect.htm' },
        { title: 'ReactJS - useCallback', url: 'https://www.tutorialspoint.com/reactjs/reactjs_usecallback.htm' },]
      },
      {
        id: 54, heading: 'Additional Concept', subheadings: [{ title: 'ReactJS - Date Picker', url: 'https://www.tutorialspoint.com/reactjs/reactjs_date_picker.htm' },
        { title: 'ReactJS - BrowserRouter', url: 'https://www.tutorialspoint.com/reactjs/reactjs_browserrouter.htm' },
        { title: 'ReactJS - Carousel', url: 'https://www.tutorialspoint.com/reactjs/reactjs_carousel.htm' },]
      },

    ],



    JAVA: [
      {
        id: 81, heading: 'Java Tutorial', subheadings: [{ title: 'JVM (Java Virtual Machine) Architecture', url: 'https://www.tutorialspoint.com/java/java_jvm.htm' },
        { title: 'Java - Basic Syntax', url: 'https://www.tutorialspoint.com/java/java_basic_syntax.htm' },
        { title: 'Java - Basic Operators', url: 'https://www.tutorialspoint.com/java/java_basic_operators.htm' },]
      },
      {
        id: 82, heading: 'Java Control Statements', subheadings: [{ title: 'Java - Loop Control', url: 'https://www.tutorialspoint.com/java/java_loop_control.htm' },
        { title: 'Java - switch statement', url: 'https://www.tutorialspoint.com/html/html_attributes.htm' },
        { title: 'Java - break Statement', url: 'https://www.tutorialspoint.com/java/java_break_statement.htm' },]
      },
      {
        id: 83, heading: 'Object Oriented Programming', subheadings: [{ title: 'Java - OOPs (Object-Oriented Programming) Concepts', url: 'https://www.tutorialspoint.com/java/java_oops_concepts.htm' },
        { title: 'Java - Inheritance', url: 'https://www.tutorialspoint.com/java/java_inheritance.htm' },
        { title: 'Java - Interfaces', url: 'https://www.tutorialspoint.com/java/java_interfaces.htm' },]
      },
      {
        id: 84, heading: 'Java Data Structure', subheadings: [{ title: 'Data Structures', url: 'https://www.tutorialspoint.com/java/java_data_structures.htm' },
        { title: 'Java - Enumeration Interface', url: 'https://www.tutorialspoint.com/html/html_attributes.htm' },
        { title: 'Java Hashtable Class', url: 'https://www.tutorialspoint.com/java/util/java_util_hashtable.htm' },]
      },
      {
        id: 85, heading: 'Java Collection', subheadings: [{ title: 'Java - Collections Framework', url: 'https://www.tutorialspoint.com/java/java_collections.htm' },
        { title: 'Java - Collection Interface', url: 'https://www.tutorialspoint.com/java/java_collection_interface.htm' },]
      },

      {
        id: 86, heading: 'Java Error and Exception', subheadings: [{ title: 'Java - Exceptions', url: 'https://www.tutorialspoint.com/java/java_exceptions.htm' },
        { title: 'Java - Throws Exception', url: 'https://www.tutorialspoint.com/java/java_throw_exception.htm' },
        { title: 'Java Try Catch Block', url: 'https://www.tutorialspoint.com/java/java_try_catch_block.htm' },]
      },

      {
        id: 87, heading: 'Java Advanced', subheadings: [{ title: 'Java - Command Line Arguments', url: 'https://www.tutorialspoint.com/java/java-command-line-args.htm' },
        { title: 'Java - Autoboxing and Unboxing', url: 'https://www.tutorialspoint.com/java/java-autoboxing-unboxing.htm' },
        { title: 'Java - Null Pointer Exception', url: 'https://www.tutorialspoint.com/java/java_nullpointerexception.htm' },]
      },
    ],


    PLSQL: [
      {
        id: 55, heading: 'PL/SQL Tutorials', subheadings: [{ title: 'PL/SQL - Basic Syntax', url: 'https://www.tutorialspoint.com/html/html_overview.htm' },
        { title: 'PL/SQL - Constants and Literals', url: 'https://www.tutorialspoint.com/plsql/plsql_constants.htm' },
        { title: 'PL/SQL - Triggers', url: 'https://www.tutorialspoint.com/plsql/plsql_triggers.htm' },
        ]
      },
      {
        id: 56, heading: 'PL/SQL Function and Exception', subheadings: [{ title: 'PL/SQL - Exceptions', url: 'https://www.tutorialspoint.com/plsql/plsql_exceptions.htm' },
        { title: 'PL/SQL - Functions', url: 'https://www.tutorialspoint.com/plsql/plsql_functions.htm' },
        { title: 'PL/SQL - Cursors', url: 'https://www.tutorialspoint.com/plsql/plsql_cursors.htm' },]
      },


    ],

    JDBC: [
      {
        id: 61, heading: 'JDBC Tutorials', subheadings: [{ title: 'JDBC - SQL Syntax', url: 'https://www.tutorialspoint.com/jdbc/jdbc-sql-syntax.htm' },
        { title: 'JDBC - Statements', url: 'https://www.tutorialspoint.com/jdbc/jdbc-statements.htm' },
        { title: 'JDBC - Exception Handling', url: 'https://www.tutorialspoint.com/jdbc/jdbc-exceptions.htm' },]
      },
      {
        id: 62, heading: 'JDBC Examples', subheadings: [{ title: 'JDBC - Create Database', url: 'https://www.tutorialspoint.com/jdbc/jdbc-create-database.htm' },
        { title: 'JDBC - Update Records', url: 'https://www.tutorialspoint.com/jdbc/jdbc-update-records.htm' },
        { title: 'JDBC - Create Table', url: 'https://www.tutorialspoint.com/jdbc/jdbc-create-tables.htm' },]
      },


    ],
    SPRINGBOOT: [
      {
        id: 71, heading: 'SPRINGBOOT Tutorials', subheadings: [{ title: 'Spring Boot - Home', url: 'https://www.tutorialspoint.com/spring_boot/index.htm' },
        { title: 'Spring Boot - Build Systems', url: 'https://www.tutorialspoint.com/spring_boot/spring_boot_build_systems.htm' },
        { title: 'Spring Boot - Building RESTful Web Services', url: 'https://www.tutorialspoint.com/spring_boot/spring_boot_building_restful_web_services.htm' },]
      },
      {
        id: 72, heading: 'SPRINGBOOT Exception Handling', subheadings: [{ title: 'HTML - Introduction', url: 'https://www.tutorialspoint.com/html/html_overview.htm' },
        { title: 'HTML - Attributes', url: 'https://www.tutorialspoint.com/html/html_attributes.htm' },
        { title: 'HTML - Formatting', url: 'https://www.tutorialspoint.com/html/html_formatting.htm' },]
      },
      {
        id: 73, heading: 'SPRINGBOOT Exception Handling', subheadings: [{ title: 'Exception Handling', url: 'https://www.tutorialspoint.com/spring_boot/spring_boot_exception_handling.htm' },
        { title: 'Spring Boot - Interceptor', url: 'https://www.tutorialspoint.com/spring_boot/spring_boot_interceptor.htm' },
        { title: 'Spring Boot - Servlet Filter', url: 'https://www.tutorialspoint.com/spring_boot/spring_boot_servlet_filter.htm' },]
      },


    ],

    AI: [
      {
        id: 74, heading: 'AI Tutorials', subheadings: [{ title: 'Artificial Intelligence  - Introduction', url: 'https://www.tutorialspoint.com/artificial_intelligence/index.htm' },
        { title: 'AI - Natural Language Processing', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_natural_language_processing.htm' },
        { title: 'AI - Popular Search Algorithms', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_popular_search_algorithms.htm' },]
      },
      {
        id: 75, heading: 'AI Neural Network', subheadings: [{ title: 'Artificial Intelligence - Neural Networks', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_neural_networks.htm' },
        { title: 'Artificial Intelligence - Robotics', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_robotics.htm' },
        { title: 'Artificial Intelligence - Terminology', url: 'https://www.tutorialspoint.com/artificial_intelligence/artificial_intelligence_terminology.htm' },]
      },



    ],

    AIPYTHON: [
      {
        id: 76, heading: 'AI with Python Tutorials', subheadings: [{ title: 'AI with Python - Introduction', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/index.htm' },
        { title: 'AI with Python – Data Preparation', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_data_preparation.htm' },
        { title: 'AI with Python – Logic Programming', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_logic_programming.htm' },]
      },
      {
        id: 77, heading: 'AI with Python - Neural Network', subheadings: [{ title: 'AI with Python – Neural Networks', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_neural_networks.htm' },
        { title: 'Reinforcement Learning', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_reinforcement_learning.htm' },
        { title: 'Genetic Algorithms', url: 'https://www.tutorialspoint.com/artificial_intelligence_with_python/artificial_intelligence_with_python_genetic_algorithms.htm' },]
      },



    ],

    ML: [
      {
        id: 64, heading: 'MACHINELEARNING Basics', subheadings: [{ title: 'Machine Learning - Getting Started', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_introduction.htm' },
        { title: 'Machine Learning - Artificial Intelligence', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_traditional_ai.htm' },
        { title: 'Machine Learning - Data Preparation', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_preparing_data.htm' },]
      },
      {
        id: 65, heading: 'MACHINELEARNING Data Visualization', subheadings: [{ title: 'Machine Learning - Histograms', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_histograms.htm' },
        { title: 'Machine Learning - Density Plots', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_density_plots.htm' },
        { title: 'Machine Learning - Scatter Matrix', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_scatter_matrix_plot.htm' },]
      },
      {
        id: 66, heading: 'Dimensionality Reduction In ML', subheadings: [{ title: 'Dimensionality Reduction - Introduction', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_dimensionality_reduction.htm' },
        { title: 'Machine Learning - Feature Extraction', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_feature_extraction.htm' },
        { title: 'Machine Learning - Principal Component Analysis', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_principal_component_analysis.htm' },]
      },
      {
        id: 67, heading: 'Machine Learning Miscellaneous', subheadings: [{ title: 'Machine Learning - Performance Metrics', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_performance_metrics.htm' },
        { title: 'Machine Learning - Life Cycle', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_life_cycle.htm' },
        { title: 'Machine Learning - Data Preparation', url: 'https://www.tutorialspoint.com/machine_learning/machine_learning_preparing_data.htm' },]
      },


    ],
    SCIKITLEARN: [
      {
        id: 68, heading: 'SCIKITLEARN Tutorials', subheadings: [{ title: 'Scikit Learn  - Introduction', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_introduction.htm' },
        { title: 'Scikit Learn - Estimator API', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_estimator_api.htm' },
        { title: 'Scikit Learn - K-Nearest Neighbors (KNN)', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_k_nearest_neighbors.htm' },]
      },
      {
        id: 69, heading: 'Scikit Learn - Clustering Methods', subheadings: [{ title: ' Clustering Methods', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_clustering_methods.htm' },
        { title: 'Clustering Performance Evaluation', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_clustering_performance_evaluation.htm' },
        { title: 'Dimensionality Reduction using PCA', url: 'https://www.tutorialspoint.com/scikit_learn/scikit_learn_dimensionality_reduction_using_pca.htm' },]
      },


    ],

    PYTHON: [
      {
        id: 88, heading: 'Python Tutorial', subheadings: [{ title: 'Python - Introduction', url: 'https://www.tutorialspoint.com/python/index.htm' },
        { title: 'Python  Interpreter and its MOdes', url: 'https://www.tutorialspoint.com/python/python_interpreter.htm' },
        { title: 'Python - User Input', url: 'https://www.tutorialspoint.com/python/python_user_input.htm' },]
      },
      {
        id: 89, heading: 'Python Functions & Modules', subheadings: [{ title: 'Python - Functions', url: 'https://www.tutorialspoint.com/python/python_functions.htm' },
        { title: 'Python - Keyword Arguments', url: 'https://www.tutorialspoint.com/python/python_keyword_arguments.htm' },
        { title: 'Python - Function Annotations', url: 'https://www.tutorialspoint.com/python/python_function_annotations.htm' },]
      },
      {
        id: 90, heading: 'Object Oriented Programming', subheadings: [{ title: 'Python - OOP Concepts', url: 'https://www.tutorialspoint.com/python/python_oops_concepts.htm' },
        { title: 'Python - Inheritance', url: 'https://www.tutorialspoint.com/python/python_inheritance.htm' },
        { title: 'Python - Encapsulation', url: 'https://www.tutorialspoint.com/python/python_encapsulation.htm' },]
      },
      {
        id: 91, heading: 'Python Miscellenous', subheadings: [{ title: 'Python - Closures', url: 'https://www.tutorialspoint.com/python/python_closures.htm' },
        { title: 'Database Access', url: 'https://www.tutorialspoint.com/python/python_database_access.htm' },
        { title: 'Python - GUI Programming', url: 'https://www.tutorialspoint.com/python/python_gui_programming.htm' },]
      },


    ],

    R: [
      {
        id: 92, heading: 'R Tutorials', subheadings: [{ title: 'R - Overview', url: 'https://www.tutorialspoint.com/r/r_overview.htm' },
        { title: 'R - Functions', url: 'https://www.tutorialspoint.com/r/r_functions.htm' },
        { title: 'R - Data Frames', url: 'https://www.tutorialspoint.com/r/r_data_frames.htm' },]
      },
      {
        id: 93, heading: 'R Data Interfaces', subheadings: [{ title: 'R - CSV Files', url: 'https://www.tutorialspoint.com/r/r_csv_files.htm' },
        { title: 'R - JSON Files', url: 'https://www.tutorialspoint.com/r/r_json_files.htm' },
        { title: 'R - Databases', url: 'https://www.tutorialspoint.com/r/r_database.htm' },]
      },
      {
        id: 94, heading: 'R Charts & Graphs', subheadings: [{ title: 'R - Bar Charts', url: 'https://www.tutorialspoint.com/r/r_bar_charts.htm' },
        { title: 'R - Histograms', url: 'https://www.tutorialspoint.com/r/r_histograms.htm' },
        { title: 'R - Pie Charts', url: 'https://www.tutorialspoint.com/r/r_pie_charts.htm' },]
      },


    ],

    POWERBI: [
      {
        id: 95, heading: 'Power BI Tutorial', subheadings: [{ title: 'Power BI - Introduction', url: 'https://www.tutorialspoint.com/power_bi/power_bi_introduction.htm' },
        { title: 'Power BI - Data Modeling', url: 'https://www.tutorialspoint.com/power_bi/power_bi_data_modeling.htm' },
        { title: 'Power BI - Visualization', url: 'https://www.tutorialspoint.com/power_bi/power_bi_visualization_options.htm' },]
      },
      {
        id: 96, heading: 'Power BI - Excel Integration', subheadings: [{ title: 'Power BI - Excel Integration', url: 'https://www.tutorialspoint.com/power_bi/power_bi_excel_integration.htm' },
        { title: 'Power BI - Administration Role', url: 'https://www.tutorialspoint.com/power_bi/power_bi_administration_role.htm' },
        { title: 'DAX Basics in Power BI', url: 'https://www.tutorialspoint.com/power_bi/dax_basics_in_power_bi.htm' },]
      },


    ],

    NUMPY: [
      {
        id: 97, heading: 'NumPy Tutorial', subheadings: [{ title: 'NumPy - Introduction', url: 'https://www.tutorialspoint.com/numpy/numpy_introduction.htm' },
        { title: 'NumPy - Array Attributes', url: 'https://www.tutorialspoint.com/numpy/numpy_array_attributes.htm' },
        { title: 'NumPy - Indexing & Slicing', url: 'https://www.tutorialspoint.com/numpy/numpy_indexing_and_slicing.htm' },]
      },
      {
        id: 98, heading: 'NumPy - Matplotlib', subheadings: [{ title: 'NumPy Matplotlib - Introduction', url: 'https://www.tutorialspoint.com/numpy/numpy_matplotlib.htm' },
        { title: 'Numpy Histogram using Matplotlib', url: 'https://www.tutorialspoint.com/numpy/numpy_histogram_using_matplotlib.htm' },
        { title: 'I/O with NumPy', url: 'https://www.tutorialspoint.com/numpy/numpy_with_io.htm' },]
      },


    ],
    CPlus:[
      {
        id: 98, heading: 'C++ Operating', subheadings: [{ title: 'Operating - Introduction', url: 'Operators.html' },
        ]
      },
    ]


  }




  const toggleExpand = (id) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };


  const selectedContentData = contentData[selectedCourse] || [];

  const handleSubheadingPress = (url, course) => {
   

    if(course === 'CPlus'){
      const localFilePath = 'Operators.html'
      navigation.navigate('WebView' , {url:localFilePath});
    }
    else{
      navigation.navigate('WebView', { url });
    }
    
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.head}>
        <Text style={{ fontSize: 20, color: 'black', fontWeight: '600' }}>{selectedCourse}</Text>
        <Text style={{ fontSize: 17, color: 'black', fontWeight: '500' }}>Programming Language</Text>
      </View>

      {selectedContentData.map((item) => (
        <View key={item.id} style={styles.sectionContainer}>
          <TouchableOpacity onPress={() => toggleExpand(item.id)} style={styles.heading}>
            <Text style={styles.headingText}>{item.heading}</Text>
            {/* <Ionicons
              name={expanded[item.id] ? 'chevron-up' : 'chevron-down'}
              size={25}
              color="black"
            /> */}

            {expanded[item.id] ? (
              <Image
                source={require('../Component/Assets/chevron-up.png')}
                style={styles.iconStyle}
              />
            ) : (
              <Image
                source={require('../Component/Assets/chevron-down.png')}
                style={styles.iconStyle}
              />
            )}
          </TouchableOpacity>
          {expanded[item.id] && (
            <View style={styles.subheadings}>
              {item.subheadings.map((subheading, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSubheadingPress(subheading.url, {selectedCourse})}
                  style={styles.subheadingTouchable}
                >
                  <Text style={styles.subheadingText}>{subheading.title}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  )
}
export default Content

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffff"
  },

  head: {
    backgroundColor: '#dcdcdc',
    height: 90,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 5,
    shadowRadius: 5,
    elevation: 10,

    justifyContent: 'center',
    alignItems: 'center'

  },

  sectionContainer: {
    marginBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#dcdcdc',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2, 
    shadowRadius: 2, 
    elevation: 2, 
    borderRadius: 5, 
    padding: 10, 
    marginTop:10,
    marginLeft:10,
    marginRight:10
   
    
    
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headingText: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  subheadings: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  subheadingText: {
    fontSize: 16,
    marginBottom: 5,
    color: '#5072A7',
    textDecorationLine: 'underline'
  },

  iconStyle: {
    height: 15,
    width: 15,
    marginRight: 10
  }
})